const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use("/", express.static("public"));

const formidable = require("formidable");

async function email(path, path2, email) {
  console.log("trying");
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "NRLFanWall@gmail.com", // generated ethereal user
      pass: "catalystvr360$" // generated ethereal password
    }
  });

  let message = {
    from: "NRLFanWall@gmail.com",

    // Comma separated list of recipients
    to: email,

    // Subject of the message
    subject: "Photo",

    // HTML body
    html: '<img src="cid:capture" />',

    // An array of attachments
    attachments: [
      // Binary Buffer attachment

      {
        filename: "capture.png",
        //filename: "topboard.png",
        path: path2,
        //path: pathModule.join(__dirname, "topboard.png"),

        cid: "capture" // should be as unique as possible
      },

      // File Stream attachment
      {
        filename: "video.mp4",
        path: path
        //cid: "video" // should be as unique as possible
      }
    ]
  };
  let info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

const sequence = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
    } else if (
      files.image_00 &&
      files.image_01 &&
      files.image_02 &&
      files.image_03 &&
      files.image_04 &&
      files.image_05 &&
      files.image_06 &&
      files.image_07 &&
      files.image_08 &&
      files.image_09 &&
      files.image_10 &&
      files.image_11 &&
      files.image_12 &&
      files.image_13 &&
      files.image_14 &&
      files.image_15 &&
      files.image_16 &&
      files.image_17 &&
      files.image_18 &&
      files.image_19 &&
      files.image_20 &&
      files.image_21 &&
      files.image_22 &&
      files.image_23 &&
      files.image_24 &&
      files.image_25 &&
      files.image_26 &&
      files.image_27 &&
      files.image_28 &&
      files.image_29 &&
      files.image_30 &&
      files.image_31 &&
      files.image_32 &&
      files.image_33 &&
      files.image_34 &&
      files.image_35 &&
      files.image_36 &&
      files.image_37 &&
      files.image_38 &&
      files.image_39 &&
      files.image_40 &&
      files.image_41 &&
      files.image_42 &&
      files.image_43 &&
      files.image_44 &&
      files.image_45 &&
      files.image_46 &&
      files.image_47 &&
      files.image_48 &&
      files.image_49 &&
      files.capture &&
      fields.email
    ) {
      fs.renameSync(
        files.capture.path,
        __dirname + "/images_2/capture.png",
        function(err) {
          if (err) console.log(err);
        }
      );

      for (let count = 0; count < 50; count++) {
        const download_path =
          files["image_" + (count < 10 ? "0" + count : count + "")].path;
        const new_path =
          __dirname +
          "/images_2/" +
          (count < 10 ? "0" + count : count + "") +
          ".png";
        fs.renameSync(download_path, new_path, function(err) {
          if (err) console.log(err);
        });
      }
      const { execSync } = require("child_process");
      execSync(
        `ffmpeg -y -i ${path.join(
          __dirname,
          "images_2",
          "%02d.png"
        )} -filter_complex "[0]reverse[r];[0][r]concat,loop=2:100,setpts=N/25/TB" -crf 25 -pix_fmt yuv420p ${path.join(
          __dirname,
          "images_2",
          "boomerang.mp4"
        )}`
      );
      // execSync(
      //   `ffmpeg -y  -i ${__dirname + "/images_2/capture.png"} -i ${path.join(
      //     __dirname,
      //     "Watermark.png"
      //   )} -filter_complex "[1]scale=iw/2:-1[b];[0:v][b] overlay" out.png`
      // );
      //ffmpeg -i B.png -i A.png -filter_complex "[1]scale=iw/2:-1[b];[0:v][b] overlay" out.png

      email(
        `${path.join(__dirname, "images_2", "boomerang.mp4")}`,
        `${path.join(__dirname + "/images_2/capture.png")}`,
        fields.email
      );
      res.status(200).json({ message: "Data received." });
    } else {
      res.status(400).json({ message: "Please include all fields and files." });
    }
  });
};

app.post("/sequence", sequence);

const port = 1111;
const server = app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port ${port}`);
});
