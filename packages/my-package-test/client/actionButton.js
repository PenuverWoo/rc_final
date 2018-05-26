
Meteor.startup(function() {
	

	RocketChat.MessageAction.addButton({
		id: 'analyse-message',
		icon: 'pin',
		label: 'Analyse Message',
		context: ['message', 'message-mobile'],
		action() {
			const message = this._arguments[1];
				console.log(message.msg + "123");
				//var tone1 = result;
				//const user = Template.instance().user.get();
				const msg_id = message._id;
				//const audio_rc = RocketChat.models.Messages.findOne(message._id);
				//console.log(audio_rc);
				if (!msg_id) {
					console.log("A");
					throw new Error('invalid-parameter');
				}

				const msg = RocketChat.models.Messages.findOne(msg_id) //|| await call('getSingleMessage', msg_id);
				if (!msg) {
					console.log("B");
					throw new Error('message-not-found');
				}
				const roomData = RocketChat.models.Rooms.findOne({
					_id: msg.rid
				});

				if (!roomData) {
					console.log("C");
					throw new Error('room-not-found');
				}
				const routePath = RocketChat.roomTypes.getRouteLink(roomData.t, roomData);
				const ab_rc = `${ Meteor.absoluteUrl().replace(/\/$/, '') + routePath }?msg=${ msg_id }`;
				console.log("D");
				Meteor.call('speech_wat', ab_rc, function(error, result) {
				if (error) {
					console.log("E");
					return handleError(error);
				}
				//console.log(tone1.document_tone);
				console.log(this);
			});

		},
		condition(message) {
			const user1= Meteor.user();
				//console.log(user1.roles[0]);
				if(user1.roles[0] == "admin"  ){
				//if(user1.roles[0] = "user" ){return false;}
					//console.log("admin123");
					return true;	}
				//	console.log("user321");

			//if(!Meteor.user().roles[0] = "admin"){return false;}
			return RocketChat.authz.hasAtLeastOnePermission('analyse-message', message.rid);
		},
		order: 22,
		group: 'menu'
	});

	
});
