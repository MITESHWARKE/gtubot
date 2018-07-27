var twit = require('twit/lib/twitter');
var config = require('./config.js');

var Twitter = new twit(config);

var messages = [" #GTUOnePlus6 #GTUMegaGiveaway #GTUOnePlusGiveaway I love most about d New flagship Oneplus6 1-The Camera is cool with Dual 16MP+20MP cameras-16MP front-facing camera. 2-Loved its hardware SD 845 3-The Display 6.2in Full Optic AMOLED 19:9 display 4. Its Oxygen Os Which Is best",
                " Watch The New #GTUOnePlusGiveaway Video at https://bit.ly/2JBcIjm  - Win 2 New OnePlus 6  ", " #GTUOnePlus6 #GTUMegaGiveaway #GTUOnePlusGiveaway @gadgetstouse Watch The New Video at https://bit.ly/2JBcIjm - Win 2 New OnePlus 6 https://t.co/Rdq4fSvAL8 #GTUOnePlus6 ", " Win 3 Brand New #OnePlus6 RED Edition Smartphones from @PhoneRadarBlog & @AmitBhawani. Click to Join the Giveaway http://gvwy.io/stsfuz9 ", " Win 5 Asus #ZenfoneMaxPro Smartphones from @PhoneRadarBlog, @AmitBhawani & @AsusIndia. RT & Click to Join Giveaway http://gvwy.io/6isfuzb ", " Here's the Unboxing of the #MotoE5Plus on @PhoneRadarBlog / @AmitBhawani - https://youtu.be/igX34qMPVyc http://gvwy.io/79sfutd ", " Watch this Unboxing https://youtu.be/MzdA0rYReIA & Win 5 #VivoNex Smartphones from @PhoneRadarBlog & @AmitBhawani. #NexorNever http://gvwy.io/65sfuzd ", " #GTUOnePlus6 #GTUMegaGiveaway #GTUOnePlusGiveaway  Win 2 New OnePlus 6 at  https://bit.ly/2JBcIjm " ];
var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

writeTweet()

setInterval(writeTweet, 15000);
