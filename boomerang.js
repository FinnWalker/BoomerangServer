const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();

const fps = 15;
const speed = 1.5;

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
      user: "TelstraHuddle@catalystvr.com.au", // generated ethereal user
      pass: "catalyst123" // generated ethereal password
    }
  });

  let message = {
    from: "TelstraHuddle@catalystvr.com.au",

    // Comma separated list of recipients
    to: email,

    // Subject of the message
    subject: "Photo",

    // HTML body
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <style type="text/css"> ReadMsgBody{ width: 100%;} .ExternalClass {width: 100%;} .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} body {-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;margin:0 !important;} p { margin: 1em 0;} table td { border-collapse: collapse;} img {outline:0;} a img {border:none;} @-ms-viewport{ width: device-width;} </style> <style type="text/css"> @media only screen and (max-width: 480px) { .container {width: 100% !important;} .footer { width:auto !important; margin-left:0; } .mobile-hidden { display:none !important; } .logo { display:block !important; padding:0 !important; } img { max-width:100% !important; height:auto !important; max-height:auto !important;} .header img{max-width:100% !important;height:auto !important; max-height:auto !important;} .photo img { width:100% !important; max-width:100% !important; height:auto !important;} .drop { display:block !important; width: 100% !important; float:left; clear:both;} .footerlogo { display:block !important; width: 100% !important; padding-top:15px; float:left; clear:both;} .nav4, .nav5, .nav6 { display: none !important; } .tableBlock {width:100% !important;} .responsive-td {width:100% !important; display:block !important; padding:0 !important; } .fluid, .fluid-centered { width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; } .fluid-centered { margin-left: auto !important; margin-right: auto !important; } /* MOBILE GLOBAL STYLES - DO NOT CHANGE */ body, .tb_properties{font-family: Arial !important; font-size: 16px !important; color: #000000 !important; line-height: 1.15 !important; padding: 5px !important; }.buttonstyles{font-family: arial, helvetica, sans-serif !important; font-size: 16px !important; color: #000000 !important; padding: 10px !important; }h1{font-family: Arial !important; font-size: 22px !important; color: #000000 !important; line-height: 1 !important; }h2{font-family: Arial !important; font-size: 20px !important; color: #000000 !important; line-height: 1 !important; }h3{font-family: Arial !important; font-size: 18px !important; color: #000000 !important; line-height: 1 !important; }a:not(.buttonstyles){line-height: 1 !important; }.mobile-hidden{display: none !important; }.responsive-td {width: 100% !important; display: block !important; padding: 0 !important;} /* END OF MOBILE GLOBAL STYLES - DO NOT CHANGE */ } @media only screen and (max-width: 640px) { .container { width:100% !important; } .mobile-hidden { display:none !important; } .logo { display:block !important; padding:0 !important; } .photo img { width:100% !important; height:auto !important;} .nav5, .nav6 { display: none !important;} .fluid, .fluid-centered { width: 100% !important; max-width: 100% !important; height: auto !important; margin-left: auto !important; margin-right: auto !important; } .fluid-centered { margin-left: auto !important; margin-right: auto !important; } } </style>  </head> <body bgcolor="#F6F6F6" text="#000000" style="-webkit-text-size-adjust:none;background-color : #F6F6F6; font-family : arial, helvetica, sans-serif; line-height : 100%; font-size : 16px; color : #000000; padding : 0px; "> <div style="font-size:0; line-height:0;"><custom name="opencounter" type="tracking"><custom name="usermatch" type="tracking" /></div> <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center"> <tr> <td align="center" valign="top"> <custom type="header"/> </td> </tr> <tr> <td align="center"> <table cellspacing="0" cellpadding="0" border="0" width="600" class="container" align="center"> <tr> <td> <table class="tb_properties border_style" style="background-color:#FFFFFF;font-size : 16px; font-family : arial, helvetica, sans-serif; line-height : 100%; color : #000000; " cellspacing="0" cellpadding="0" bgcolor="#ffffff" width="100%"> <tr> <td align="center" valign="top"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr>  <td class="content_padding" style="padding : 0px; ">  <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr>  <td align="center" class="header" valign="top"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td align="left" valign="top"> <table cellspacing="0" cellpadding="0" style="width:100%"> <tbody> <tr> <td class="responsive-td" valign="top" style="width: 100%;"> <table cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><img data-assetid="116061" src="https://image.nrl.com/lib/fe8f13727267017575/m/11/b3463dd7-ccfe-4310-982e-9ef2cb9ea836.jpg" alt="THe Huddle - Powered by Telstra" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;"></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 40px 40px 0px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 175%;"> <div style="line-height: 150%; text-align: center;"> <span style="font-size:22px;"><span style="color: rgb(0, 0, 0);"><span style="font-family: arial, helvetica, sans-serif;"><b>Don't forget to share your Huddle on your social media channels!</b></span></span></span><br>  </div><div style="line-height: 150%; text-align: center;"> <span style="font-size:18px;"><b>Tag @Telstra, @NRL and #TelstraHuddle.</b></span></div></div></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 40px 40px 0px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 150%;"> <span style="font-size:16px;"><span style="font-family:arial,helvetica,sans-serif;"><span style="color:#000000;">You've joined the Huddle, now tag #TelstraHuddle and show off your squad to all your friends. Your image is attached to this email as a file for direct download. <b>The Huddle - Powered By Telstra.</b></span></span></span><br> <br> Check out our <b>Huddle How-to Guide </b>below to find out where the next Huddle is.</div></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 20px 40px 0px; " class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><img data-assetid="114343" src="https://image.nrl.com/lib/fe8f13727267017575/m/11/ea721744-ae50-4293-be2c-348d66ca9d1f.png" alt="Find Out More" height="54" width="356" style="display: block; padding: 0px; text-align: center; height: 54px; width: 356px; border: 0px;"></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 40px 40px 0px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 150%;"> The new NRL Telstra Premiership season will showcase how the game is still Simply The Best, 30 years on. Don't miss the chance to be part of a historic season, celebrating 30 years of memories, highlights and more moments that leave you holding your breath.<br> <br> Get to your nearest game this season. View the 2020 draw <a alias="here" conversion="false" data-linkto="https://" href="https://tickets.nrl.com/comp/NRL%20Telstra%20Premiership" style="color:#000eee;text-decoration:underline;" title="here">here</a>.</div></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFFFFF; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 40px 40px 10px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 150%; text-align: center;"> <b>Powered by Telstra</b></div></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 0px 40px 40px; " class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><img data-assetid="116337" src="https://image.nrl.com/lib/fe8f13727267017575/m/11/c1b7e73f-1f0f-48ec-83f0-b86e93a54e13.png" height="57" width="50" style="display: block; padding: 0px; text-align: center; height: 57px; width: 50px; border: 0px;"></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 10px; " class="stylingblock-content-wrapper camarker-inner"><table cellspacing="0" cellpadding="0" style="width: 100%;"><tr><td><table cellspacing="0" cellpadding="0" style="width: 100%;"><tr><td valign="top" class="responsive-td" style="width: 100%; padding-bottom: 3px;"><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 15px 20px 0px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 150%; text-align: center;"> <span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:12px; "><a alias="" conversion="false" data-linkto="https://" href="https://www.nrl.com/contact-us/" style="color:#FFFFFF;text-decoration:none;font-weight:normal;line-height:100%;" title="">Contact Us</a><span style="color:#FFFFFF;">        </span><a alias="" conversion="false" data-linkto="https://" href="https://help.nrl.com/" style="color:#FFFFFF;text-decoration:none;font-weight:normal;line-height:100%;" title="">Help</a><span style="color:#FFFFFF;">        </span><a alias="" conversion="false" data-linkto="https://" href="https://www.nrl.com/terms-of-use" style="color:#FFFFFF;text-decoration:none;font-weight:normal;line-height:100%;" title="">Terms and Conditions</a><span style="color:#FFFFFF;">        </span><a alias="" conversion="false" data-linkto="https://" href="https://www.nrl.com/privacy-policy" style="color:#FFFFFF;text-decoration:none;font-weight:normal;line-height:100%;" title="">Privacy Policy</a></span></span></div><div style="line-height: 1.15; text-align: justify;">  </div></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 0px 60px; " class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><img data-assetid="49444" src="http://image.nrl.com/lib/fe8f13727267017575/m/7/de25abb5-6f9f-47ef-af5d-2fd286ac200f.png" alt="NRL Logo" height="37" width="30" style="display: block; padding: 0px; text-align: center; height: 37px; width: 30px; border: 0px;"></td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 10px 40px 0px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 1.15; text-align: center;"> <span style="color:#cccccc;"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:12px; ">© 2020 National Rugby League</span></span></span></div></td></tr></table></td></tr></table></td></tr><tr><td><table cellspacing="0" cellpadding="0" style="width: 100%;"><tr><td valign="top" class="responsive-td" style="width: 100%; padding-top: 3px;"><table cellpadding="0" cellspacing="0" width="100%" style="background-color: transparent; min-width: 100%; " class="stylingblock-content-wrapper"><tr><td style="padding: 10px 40px; " class="stylingblock-content-wrapper camarker-inner"><div style="line-height: 1.25; padding-bottom: 10px; text-align: center;"> <span style="color:#cccccc;"><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:11px;">National Rugby League, Rugby League Central Driver Avenue, Moore Park, NSW 2021 AU </span></span> </span></div></td></tr></table></td></tr></table></td></tr></table></td></tr></table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> <tr> <td valign="top"> <custom type="footer" /> </td> </tr> </table> </body> </html>`,

    // An array of attachments
    attachments: [
      // Binary Buffer attachment

      {
        filename: "Huddle.png",
        //filename: "topboard.png",
        path: path2
        //path: pathModule.join(__dirname, "topboard.png"),

        //cid: "capture" // should be as unique as possible
      },

      // File Stream attachment
      {
        filename: "HuddleBoom.mp4",
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
      // files.image_15 &&
      // files.image_16 &&
      // files.image_17 &&
      // files.image_18 &&
      // files.image_19 &&
      // files.image_20 &&
      // files.image_21 &&
      // files.image_22 &&
      // files.image_23 &&
      // files.image_24 &&
      // files.image_25 &&
      // files.image_26 &&
      // files.image_27 &&
      // files.image_28 &&
      // files.image_29 &&
      // files.image_30 &&
      // files.image_31 &&
      // files.image_32 &&
      // files.image_33 &&
      // files.image_34 &&
      // files.image_35 &&
      // files.image_36 &&
      // files.image_37 &&
      // files.image_38 &&
      // files.image_39 &&
      // files.image_40 &&
      // files.image_41 &&
      // files.image_42 &&
      // files.image_43 &&
      // files.image_44 &&
      // files.image_45 &&
      // files.image_46 &&
      // files.image_47 &&
      // files.image_48 &&
      // files.image_49 &&
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

      for (let count = 0; count < fps * 2; count++) {
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
        )} -filter_complex "[0]reverse[r];[0][r]concat,loop=2:${fps *
          4},setpts=N/${fps * speed}/TB" -crf 25 -pix_fmt yuv420p ${path.join(
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
      res.status(200).json({ message: "Data received." });
      require("dns").resolve("www.google.com", function(err) {
        if (err) {
          console.log("No connection");
          fs.mkdirSync(path.join(__dirname, "offline", fields.email));

          fs.renameSync(
            path.join(__dirname, "images_2", "boomerang.mp4"),
            path.join(
              path.join(__dirname, "offline", fields.email, "boomerang.mp4")
            )
          );
          fs.renameSync(
            path.join(__dirname, "images_2", "capture.png"),
            path.join(
              path.join(__dirname, "offline", fields.email, "capture.png")
            )
          );
        } else {
          console.log("connection");
          email(
            `${path.join(__dirname, "images_2", "boomerang.mp4")}`,
            `${path.join(__dirname, "images_2", "capture.png")}`,
            fields.email
          );
        }
      });
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
