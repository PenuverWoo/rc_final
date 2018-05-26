
Meteor.methods({
	speech_wat(ab_rc){
		console.log("speechwat");
		var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
		var fs = require('fs');
		var speech_to_text = new SpeechToTextV1 ({
		  username: '050a661a-10c1-4403-ba22-c56a3dae4646',
		  password: '1TAxXoQyYJxi'
		});
		console.log("A");
		// var url = "http://localhost:3000/file-upload/g6mQAQ9ap33nTwHeb/Audio%20record.mp3";
		//const audio1 = RocketChat.models.Messages.getMessageByFileId(audio2);
		// var myRequest = new Request('Audio%20record.mp3');
		/*const myRequest = new Request('http://localhost:3000/file-upload/g6mQAQ9ap33nTwHeb/Audio%20record.mp3');
		const myURL = myRequest.url;
		const myMethod = myRequest.method;
		const myCred = myRequest.credentials;
		fetch(myRequest)
		.then(response => response.blob())
		.then(blob =>{
			myMp3.src = URL.createObjectURL(blob);
		})*/
		var http = require("http://localhost:3000/file-upload/g6mQAQ9ap33nTwHeb/Audio%20record.mp3");
		console.log("B");
		/*var option = {
			hostname: "localhost:3000",

			path:"file-upload/g6mQAQ9ap33nTwHeb/Audio%20record.mp3",
			method: "POST"

		}*/
		console.log("C");
		  var params = {
		    'audio': fs.createReadStream(http),
		    'content_type': 'audio/mp3'
		   /* timestamps: true,
		    word_alternatives_threshold: 0.9,
		    keywords: ['like'],
		    keywords_threshold: 0.5*/
		  };
		console.log("D");
		
			return new Promise(function(resolve, reject) {
					speech_to_text.recognize(params, function(error, response) {
						if(error) reject();

						resolve(response);
					});
			});
			console.log("E");

				
				
	}
});
