require("dotenv").config();

const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const parser = require("@babel/parser");

const Product = require("./models/Product");

console.log("======================================");
console.log("       PRODUCT IMPORT STARTED");
console.log("======================================");

const srcPath = path.join(
  "C:",
  "Users",
  "Administrator",
  "Desktop",
  "Operating System",
  "reactfolio",
  "demoshopapp",
  "src"
);

const componentsPath = path.join(
  srcPath,
  "components"
);

console.log("SRC PATH:", srcPath);
console.log("COMPONENTS PATH:", componentsPath);

if (!fs.existsSync(componentsPath)) {
  throw new Error(
    `Components folder not found: ${componentsPath}`
  );
}

console.log(" Components folder found!");

console.log("--------------------------------------");

function getValue(node) {
  if (!node) {
    return undefined;
  }

  if (node.type === "StringLiteral") {
    return node.value;
  }

  if (node.type === "NumericLiteral") {
    return node.value;
  }

  return undefined;
}



function getProperty(objectNode, propertyName) {
  if (
    !objectNode ||
    !objectNode.properties
  ) {
    return undefined;
  }

  const property =
    objectNode.properties.find(
      (prop) =>
        prop.type === "ObjectProperty" &&
        (
          (
            prop.key.type === "Identifier" &&
            prop.key.name === propertyName
          ) ||
          (
            prop.key.type === "StringLiteral" &&
            prop.key.value === propertyName
          )
        )
    );

  if (!property) {
    return undefined;
  }

  return getValue(property.value);
}



function findProductObjects(
  node,
  products = []
) {
  if (
    !node ||
    typeof node !== "object"
  ) {
    return products;
  }

 

  if (node.type === "ArrayExpression") {

    for (const element of node.elements) {

      if (
        element &&
        element.type === "ObjectExpression"
      ) {

        const name = getProperty(
          element,
          "name"
        );

        const price = getProperty(
          element,
          "price"
        );

        const img = getProperty(
          element,
          "img"
        );

     

        if (
          name &&
          price !== undefined &&
          img
        ) {

          products.push({
            name: name,
            price: price,

            oldPrice: getProperty(
              element,
              "oldPrice"
            ),

            image: img,

            reviews: getProperty(
              element,
              "reviews"
            ),

            discount: getProperty(
              element,
              "discount"
            ),
          });
        }
      }
    }
  }



  for (const key of Object.keys(node)) {

    
    if (
      key === "loc" ||
      key === "start" ||
      key === "end"
    ) {
      continue;
    }

    const value = node[key];

    if (Array.isArray(value)) {

      for (const item of value) {
        findProductObjects(
          item,
          products
        );
      }

    } else if (
      value &&
      typeof value === "object"
    ) {

      findProductObjects(
        value,
        products
      );
    }
  }

  return products;
}



async function importProducts() {

  try {



    if (!process.env.MONGO_URI) {

      throw new Error(
        "MONGO_URI is missing from .env file."
      );
    }



    console.log(
      "\nConnecting to MongoDB..."
    );

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      " MongoDB connected successfully!"
    );

    console.log("--------------------------------------");



    const files = fs
      .readdirSync(componentsPath)
      .filter((file) => {

        const isJSX =
          file.toLowerCase().endsWith(".jsx");

        const isShoppingFile =
          file
            .toLowerCase()
            .includes("shopping");

        return (
          isJSX &&
          !isShoppingFile
        );
      });

    console.log(
      `📁 JSX files found: ${files.length}`
    );

    console.log("--------------------------------------");

    let allProducts = [];



    for (const file of files) {

      const filePath =
        path.join(
          componentsPath,
          file
        );

      try {

        const code =
          fs.readFileSync(
            filePath,
            "utf8"
          );

        const ast =
          parser.parse(
            code,
            {
              sourceType: "module",
              plugins: ["jsx"],
            }
          );

        const products =
          findProductObjects(ast);

   

        if (
          products.length > 0
        ) {

          const category =
            path
              .basename(
                file,
                ".jsx"
              );

          const productsWithCategory =
            products.map(
              (product) => ({
                ...product,
                category: category,
              })
            );

          allProducts.push(
            ...productsWithCategory
          );

          console.log(
            ` ${file} → ${products.length} products`
          );

        } else {

          console.log(
            `⏭️ ${file} → No products`
          );
        }

      } catch (error) {

        console.log(
          ` ${file} → Parse error`
        );

        console.log(
          `   ${error.message}`
        );
      }
    }



    console.log("--------------------------------------");

    console.log(
      `\n TOTAL PRODUCTS FOUND: ${allProducts.length}`
    );

    console.log("--------------------------------------");


    const categoryCount = {};

    allProducts.forEach(
      (product) => {

        if (
          !categoryCount[
            product.category
          ]
        ) {

          categoryCount[
            product.category
          ] = 0;
        }

        categoryCount[
          product.category
        ]++;
      }
    );

    console.log(
      "\n📊 CATEGORY SUMMARY:"
    );

    Object.entries(
      categoryCount
    ).forEach(
      ([category, count]) => {

        console.log(
          `${category}: ${count}`
        );
      }
    );

    console.log("--------------------------------------");


    console.log(
      "\nDeleting old products..."
    );

    await Product.deleteMany({});

    console.log(
      " Old products deleted."
    );



    if (
      allProducts.length > 0
    ) {

      console.log(
        `\nInserting ${allProducts.length} products...`
      );

      await Product.insertMany(
        allProducts
      );

      console.log("--------------------------------------");

      console.log(
        "🎉 ALL PRODUCTS IMPORTED SUCCESSFULLY!"
      );

      console.log(
        `Total inserted: ${allProducts.length}`
      );

    } else {

      console.log(
        "\n⚠️ No products found."
      );
    }



    await mongoose.connection.close();

    console.log("--------------------------------------");

    console.log(
      "MongoDB connection closed."
    );

    console.log("======================================");
    console.log("        IMPORT COMPLETED");
    console.log("======================================");

  } catch (error) {

    console.error("\n======================================");
    console.error("           IMPORT FAILED");
    console.error("======================================");

    console.error(
      "Error:",
      error.message
    );

    console.error(
      "\nFull error:"
    );

    console.error(error);

    if (
      mongoose.connection.readyState !== 0
    ) {

      await mongoose.connection.close();
    }

    process.exit(1);
  }
}



importProducts();