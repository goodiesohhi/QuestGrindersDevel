if (Meteor.isClient) {





Meteor.startup(function() {

$.getScript("./bootstrap.js");
$.getScript("./jquery.wysibb.min.js");




})



ReactiveTabs.createInterface({
  template: 'basicTabs',
  onChange: function (slug, template) {
    // This callback runs every time a tab changes.
    // The `template` instance is unique per {{#basicTabs}} block.
    console.log('[tabs] Tab has changed! Current tab:', slug);
    console.log('[tabs] Template instance calling onChange:', template);
  }
});

  Avatar.setOptions({
    customImageProperty: function() {
      var user = this;
      // calculate the image URL here
      return user.avatar2;
    },
    imageSizes: {
      'large': 150,
      'mySize': 90
    }
  });




  Template.bbcodeeditor.onRendered(function() {
   $(function() {
$("#editor").wysibb();
})
  });



  Template.chat.onRendered(function() {
    window.disqus = new Disqus('questgrinders');
    disqus.loadComments();
  });

  $('html').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      return false;
    }
  });

  Router.onBeforeAction(function() {
    if (!Meteor.user() && this.ready())
      return this.redirect('/needlogin');
    else {
      this.next()
    }
  }, {
    except: ['needlogin', 'leaderboard', 'contact', 'help', 'infopages', 'home', 'login']
  });




  Meteor.users.deny({
    update: function() {
      return true;
    }
  });

  Router.route('/new', function() {
    this.render('new');
  });


  Router.route('/spyshop', function() {
    this.render('spyshop');
  });

  Router.route('/home', function() {
    this.render('home');
  });
  Router.route('/questleader', function() {
    this.render('questleader');
  });
  Router.route('/search', function() {
    this.render('search');
  });


  Router.route('/quest', function() {
    this.render('quest');
  });



  Router.route('/myprofile', function() {
    this.render('myProfile');
  });

  Router.route('/game', function() {
    this.render('game');
  });


  Router.route('/city', function() {
    this.render('city');
  });

  Router.route('/chat', function() {
    this.render('chat');
  });


  Router.route('/lib', function() {
    this.render('lib');
  });

  Router.route('/no', function() {
    this.render('no');
  });


  Router.route('/construction', function() {
    this.render('construct');
  });

  Router.route('/infopages', function() {
    this.render('info');
  });

  Router.route('/needlogin', function() {
    this.render('needlogin');
  });


  Router.route('/minigames', function() {
    this.render('minigames');
  });

  Router.route('/map', function() {
    this.render('map');
  });

  Router.route('/leaderboard', function() {
    this.render('leaderboards');
  });

  Router.route('/', function() {
    this.render('start');
  });

  Router.route('/base', function() {
    this.render('leaderboard');
  });

  Router.route('/lore', function() {
    this.render('lore');
  });

  Router.route('/stats', function() {
    this.render('stats');
  });

  Router.route('/help', function() {
    this.render('help');
  });

  Router.route('/moon', function() {
    this.render('moon');
  });

  Router.route('/store', function() {
    this.render('store');
  });
  Router.route('/jack', function() {
    this.render('jack');
  });

  Router.route('/goodiesohhi', function() {
    this.render('cheat');
  });

  Router.route('/contact', function() {
    this.render('contact');
  });

  Router.route('/login', function() {
    this.render('login');
  });
  Router.route('/online', function() {
    this.render('online');
  });

  Router.route('/ads', function() {
    this.render('ads');
  });





  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Meteor.subscribe('userData');
  Meteor.subscribe('userStatus');



  Template.online.players = function() {
    return Meteor.users.find({
      "status.online": true
    });
  };
  Template.online.playernumber = function() {
    return Meteor.users.find({
      "status.online": true
    }).count();
  };

Template.store.helpers({
    isHome: function(){
        return Session.get('isHome');
    }
});

  Template.leaderboards.playernumber = function() {
    return Meteor.users.find({}).count();
  };

  Template.leaderboard.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };

Template.leaderboard.helpers({
  base: function () {
    // Every tab object MUST have a name and a slug!
    return [
      { name: 'Do a Quest', slug: 'quest' },
      { name: 'Map', slug: 'map' },
      { name: 'My Profile', slug: 'profile' },


    ];
  },
  activeTab: function () {
    // Use this optional helper to reactively set the active tab.
    // All you have to do is return the slug of the tab.

    // You can set this using an Iron Router param if you want--
    // or a Session variable, or any reactive value from anywhere.

    // If you don't provide an active tab, the first one is selected by default.
    // See the `advanced use` section below to learn about dynamic tabs.
    return Session.get('activeTab'); // Returns "people", "places", or "things".
  }
});

Template.store.helpers({
  tabs: function () {
    // Every tab object MUST have a name and a slug!
    return [
      { name: 'Click', slug: 'click' },
      { name: 'Hero', slug: 'hero' },
      { name: 'Archer', slug: 'archer' },
      { name: 'Mage', slug: 'mage'},

    ];
  },
  activeTab: function () {
    // Use this optional helper to reactively set the active tab.
    // All you have to do is return the slug of the tab.

    // You can set this using an Iron Router param if you want--
    // or a Session variable, or any reactive value from anywhere.

    // If you don't provide an active tab, the first one is selected by default.
    // See the `advanced use` section below to learn about dynamic tabs.
    return Session.get('activeTab'); // Returns "people", "places", or "things".
  }
});

  Template.leaderboard.items = function() {
    return Items;
  }

  Template.reward.items = function() {
    return Meteor.user();
  }

  Template.game.user = function() {
    return Meteor.user();
  }

  Template.profile.user = function() {
    return Meteor.user();
  }

  Template.myProfile.user = function() {
    return Meteor.user();
  }

  Template.leaderboard.user = function() {
    return Meteor.user();
  }
  Template.statusshow.user = function() {
    return Meteor.user();
  }




 Template.champstore.events({
    'click input.buy': function(event) {
      Meteor.call('champrandom');
    }
  });

  Template.navbar.events({
'click': function() {
       $('#hidebutton').click(function() {
       if (hiddennav === false) {

       $("navigation").hide();
     hiddennav = true;
     } else {
       $("navigation").show();
     hiddennav = false;
     }
})
}

  });




  Template.leaderboard.events({
    'click': function() {
      Meteor.call('click');



      $('#heroimg').mouseover(function() {
      $(this).data('over',true);
      updateImage($(this));
  }).mousedown(function() {
      $(this).data('down',true);
      updateImage($(this));
  }).mouseup(function() {
      $(this).data('down',false);
      updateImage($(this));
  }).mouseout(function() {
      $(this).data('over',false);
      updateImage($(this));
  });

  function updateImage(elem) {
      if (elem.data('down')) {
          elem.attr('src','frame2.png');

      } else {
          elem.attr('src','frame1.png');
      }
  }



    }
  });




  Template.reward.events({
    'click input.win': function() {
      Meteor.call('promo1');
      alert("You have just won 1 free Standard QuestCo. Questing Rifle! Unless you already did this. This only works once!");

    }
  });

  Template.leaderboard.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });


  Template.moon.rendered = function() {
    if (!this.rendered) {
      $('body').css('background-image', 'url(/moonback.png)');
      this.rendered = true;
    }
  };

  Template.game.rendered = function(){
    if (!this.rendered) {


      var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gamediv');
       var emitter;
           var player;
            var facing = 'left';
            var jumpTimer = 0;
            var cursors;
            var jumpButton;
            var bg;
            var gold;
             var area = Meteor.user().area;
  var savex = Meteor.user().savex;
  var savey = Meteor.user().savey;
 var loadenabled=Meteor.user().load;
 var connectedplayers = Meteor.users.find({ connected : 1 });

 var pvp =  {



     preload: function() {

game.load.atlasJSONHash('playersprite', 'assets/player/weaponless/playerunarmed.png', 'assets/player/weaponless/playerunarmed.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

         game.load.image('dude', '/hero.png');
         game.load.image('background', '/assets/fieldsback.png');
         game.load.image('shack', '/assets/shack.png');
          game.load.image('leavesign', '/assets/leavesign.png');
 game.load.image('gold', 'assets/gold.png');
 game.load.image('crosshair', 'assets/crosshair.png');

     },


                particleBurst: function() {

                    //  Position the emitter where the mouse/touch event was


                    //  The first parameter sets the effect to "explode" which means all particles are emitted at once
                    //  The second gives each particle a 2000ms lifespan
                    //  The third is ignored when using burst/explode mode
                    //  The final parameter (10) is how many particles will be emitted in this single burst
                    emitter.start(true, 2000, null, 5);
                Meteor.call('click');

                },

              leave: function() {

                      game.state.start('Map');


                },

     create: function() {
area = Meteor.user().area;
savex = Meteor.user().savex;
savey = Meteor.user().savey;
loadenabled=Meteor.user().load

bg = game.add.tileSprite(0, 0, 1920, 600, 'background');
       text = game.add.text(500, 500, "GOLD", {
              font: "18px Arial",
              fill: "#ff0044",
              align: "right"
          });

    game.physics.startSystem(Phaser.Physics.ARCADE);


 game.stage.backgroundColor = 0x337799;
leavesign = game.add.sprite(300, 550, 'leavesign');
cross = game.add.sprite(300, 550, 'crosshair');
emitter = game.add.emitter(0, 0, 100);


 emitter.makeParticles('gold');

 emitter.gravity = 200;
cross.addChild(emitter);

game.physics.enable(cross, Phaser.Physics.ARCADE);

//  Tell it we don't want physics to manage the rotation
cross.body.allowRotation = false;

//position the emitter relative to the sprite's anchor location
emitter.y = 0;
emitter.x = 0;

 game.input.onDown.add(this.particleBurst, this);
        game.world.setBounds(0, 0, 1920, 600);
          game.physics.startSystem(Phaser.Physics.ARCADE);

         game.time.desiredFps = 30;
leavesign.inputEnabled = true;
leavesign.events.onInputDown.add(this.leave, this);

         game.physics.arcade.gravity.y = 250;

connectedplayers.forEach(function() {

   window['player' + this.userId ] = game.add.sprite(Meteor.user().savex, Meteor.user().savey, 'playersprite' );
});


thisplayer = "player"+this.userId

Meteor.users.update({
_id: this.userId
}, {
$set: {

 'connected' : 2 ,
}
});



player.scale.setTo(0.5,0.5);


player.animations.add('right',["1", "2", "3", "4"] , 10, true);
player.animations.add('left', ["5", "6", "7", "8"] , 10 , true);



         game.physics.enable(player, Phaser.Physics.ARCADE);



         player.body.bounce.y = 0.2;
         player.body.collideWorldBounds = true;
         player.body.setSize(150, 300);



         cursors = game.input.keyboard.createCursorKeys();
         jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
       game.camera.follow(player);
     },




     update:  function() {
loadenabled=Meteor.user().load
area = Meteor.user().area;
savex = Meteor.user().savex;
savey = Meteor.user().savey;

Meteor.call('updatePosition', player.position.x, player.position.y, "fields");
connectedplayers = Meteor.users.find({ connected : 1 });

connectedplayers.forEach(function() {

   window['player' + this.userId ] = game.add.sprite(Meteor.user().savex, Meteor.user().savey, 'playersprite' );
});       //  Position the emitter where the mouse/touch event was

cross.rotation = game.physics.arcade.moveToPointer(cross, 60, game.input.activePointer, 1000);
//  Position the emitter where the mouse/touch event was


       //  Position the emitter where the mouse/touch event was


         // game.physics.arcade.collide(player, layer);
        gold=Meteor.user().money;

        text.setText("GOLD:" + gold+"G");

         player.body.velocity.x = 0;

         if (cursors.left.isDown)
         {
             player.body.velocity.x = -150;


             if (facing != 'left')
             {
                 player.animations.play('left');
                 facing = 'left';
             }
         }
         else if (cursors.right.isDown)
         {
             player.body.velocity.x = 150;


             if (facing != 'right')
             {
                 player.animations.play('right');
                 facing = 'right';
             }
         }
   else if (cursors.up.isDown )
         {




         }
         else
         {
             if (facing != 'idle')
             {
                 player.animations.stop();


                 facing = 'idle';
             }
         }

         if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
         {
             player.body.velocity.y = -250;

             jumpTimer = game.time.now + 750;
         }

     },

     render:  function() {

         game.debug.text(game.time.suggestedFps, 32, 32);

         // game.debug.text(game.time.physicsElapsed, 32, 32);
         // game.debug.body(player);
         // game.debug.bodyInfo(player, 16, 24);







     },


 }



       var fields =  {



           preload: function() {

 game.load.atlasJSONHash('playersprite', 'assets/player/weaponless/playerunarmed.png', 'assets/player/weaponless/playerunarmed.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

               game.load.image('dude', '/hero.png');
               game.load.image('background', '/assets/fieldsback.png');
               game.load.image('shack', '/assets/shack.png');
                game.load.image('leavesign', '/assets/leavesign.png');
       game.load.image('gold', 'assets/gold.png');
       game.load.image('crosshair', 'assets/crosshair.png');

           },


                      particleBurst: function() {

                          //  Position the emitter where the mouse/touch event was


                          //  The first parameter sets the effect to "explode" which means all particles are emitted at once
                          //  The second gives each particle a 2000ms lifespan
                          //  The third is ignored when using burst/explode mode
                          //  The final parameter (10) is how many particles will be emitted in this single burst
                          emitter.start(true, 2000, null, 5);
                      Meteor.call('click');

                      },

                    leave: function() {

                            game.state.start('Map');


                      },

           create: function() {
 area = Meteor.user().area;
savex = Meteor.user().savex;
 savey = Meteor.user().savey;
loadenabled=Meteor.user().load

   bg = game.add.tileSprite(0, 0, 1920, 600, 'background');
             text = game.add.text(500, 500, "GOLD", {
                    font: "18px Arial",
                    fill: "#ff0044",
                    align: "right"
                });

          game.physics.startSystem(Phaser.Physics.ARCADE);


       game.stage.backgroundColor = 0x337799;
 leavesign = game.add.sprite(300, 550, 'leavesign');
cross = game.add.sprite(300, 550, 'crosshair');
emitter = game.add.emitter(0, 0, 100);


       emitter.makeParticles('gold');

       emitter.gravity = 200;
cross.addChild(emitter);

    game.physics.enable(cross, Phaser.Physics.ARCADE);

    //  Tell it we don't want physics to manage the rotation
   cross.body.allowRotation = false;

  //position the emitter relative to the sprite's anchor location
  emitter.y = 0;
  emitter.x = 0;

       game.input.onDown.add(this.particleBurst, this);
              game.world.setBounds(0, 0, 1920, 600);
                game.physics.startSystem(Phaser.Physics.ARCADE);

               game.time.desiredFps = 30;
leavesign.inputEnabled = true;
   leavesign.events.onInputDown.add(this.leave, this);

               game.physics.arcade.gravity.y = 250;
               if (loadenabled === true) {


player = game.add.sprite(savex, savey, 'playersprite' );
      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {

       'load' : false ,
      }
    });
} else

{

player = game.add.sprite(20, 300, 'playersprite' );

}

player.scale.setTo(0.5,0.5);


  player.animations.add('right',["1", "2", "3", "4"] , 10, true);
player.animations.add('left', ["5", "6", "7", "8"] , 10 , true);



               game.physics.enable(player, Phaser.Physics.ARCADE);



               player.body.bounce.y = 0.2;
               player.body.collideWorldBounds = true;
               player.body.setSize(150, 300);



               cursors = game.input.keyboard.createCursorKeys();
               jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
             game.camera.follow(player);
           },




           update:  function() {
loadenabled=Meteor.user().load
 area = Meteor.user().area;
   savex = Meteor.user().savex;
 savey = Meteor.user().savey;

Meteor.call('updatePosition', player.position.x, player.position.y, "fields");
             //  Position the emitter where the mouse/touch event was

 cross.rotation = game.physics.arcade.moveToPointer(cross, 60, game.input.activePointer, 1000);
//  Position the emitter where the mouse/touch event was


             //  Position the emitter where the mouse/touch event was


               // game.physics.arcade.collide(player, layer);
              gold=Meteor.user().money;

              text.setText("GOLD:" + gold+"G");

               player.body.velocity.x = 0;

               if (cursors.left.isDown)
               {
                   player.body.velocity.x = -150;


                   if (facing != 'left')
                   {
                       player.animations.play('left');
                       facing = 'left';
                   }
               }
               else if (cursors.right.isDown)
               {
                   player.body.velocity.x = 150;


                   if (facing != 'right')
                   {
                       player.animations.play('right');
                       facing = 'right';
                   }
               }
         else if (cursors.up.isDown )
               {




               }
               else
               {
                   if (facing != 'idle')
                   {
                       player.animations.stop();


                       facing = 'idle';
                   }
               }

               if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
               {
                   player.body.velocity.y = -250;

                   jumpTimer = game.time.now + 750;
               }

           },

           render:  function() {

               game.debug.text(game.time.suggestedFps, 32, 32);

               // game.debug.text(game.time.physicsElapsed, 32, 32);
               // game.debug.body(player);
               // game.debug.bodyInfo(player, 16, 24);







           },


       }


       var map =  {


           preload: function() {

               game.load.image('dude', '/hero.png');
               game.load.image('background', 'assets/mapback.png');
               game.load.image('shack', '/assets/shack.png');
               game.load.image('sign', '/assets/fieldsign.png');
                game.load.image('store', '/assets/storesign.png');
             game.load.atlasJSONHash('playersprite', 'assets/player/weaponless/playerunarmed.png', 'assets/player/weaponless/playerunarmed.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


           },


           create: function() {

 area = Meteor.user().area;
savex = Meteor.user().savex;
 savey = Meteor.user().savey;
loadenabled=Meteor.user().load

              game.world.setBounds(0, 0, 1920, 600);
                game.physics.startSystem(Phaser.Physics.ARCADE);

               game.time.desiredFps = 30;

               bg = game.add.tileSprite(0, 0, 1920, 600, 'background');

               game.physics.arcade.gravity.y = 250;
 fieldsign = game.add.sprite(250, 460, 'sign');
 storesign = game.add.sprite(600, 325, 'shack');



                             if (loadenabled === true) {
player = game.add.sprite(savex, savey, 'playersprite');
      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {

       'load' : false ,
      }
    });
} else

{

player = game.add.sprite(20, 300, 'playersprite');

}
player.scale.setTo(0.5,0.5);
               game.physics.enable(player, Phaser.Physics.ARCADE);

               player.body.bounce.y = 0.2;
               player.body.collideWorldBounds = true;
               player.body.setSize(150, 300);





player.animations.add('right',["1", "2", "3", "4"] , 10, true);
player.animations.add('left', ["5", "6", "7", "8"] , 10 , true);


               cursors = game.input.keyboard.createCursorKeys();
               jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
             game.camera.follow(player);
             fieldsign.inputEnabled = true;
                storesign.inputEnabled = true;
             fieldsign.events.onInputDown.add(this.gotofields, this);
                  storesign.events.onInputDown.add(this.gotostore, this);
           },

           gotofields: function(){

              game.state.start('Fields');

           },

            gotostore: function(){
          Session.set('isHome', true)
         },

           update:  function() {

 area = Meteor.user().area;
savex = Meteor.user().savex;
 savey = Meteor.user().savey;
loadenabled=Meteor.user().load

  Meteor.call('updatePosition', player.position.x, player.position.y, "map");


               // game.physics.arcade.collide(player, layer);

               player.body.velocity.x = 0;

               if (cursors.left.isDown)
               {
                   player.body.velocity.x = -150;


                   if (facing != 'left')
                   {
                       player.animations.play('left');
                       facing = 'left';
                   }
               }
               else if (cursors.right.isDown)
               {
                   player.body.velocity.x = 150;


                   if (facing != 'right')
                   {
                       player.animations.play('right');
                       facing = 'right';
                   }
               }
         else if (cursors.up.isDown )
               {




               }
               else
               {
                   if (facing != 'idle')
                   {
                       player.animations.stop();


                       facing = 'idle';
                   }
               }

               if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
               {
                   player.body.velocity.y = -250;

                   jumpTimer = game.time.now + 750;
               }
           },

           render:  function() {

               game.debug.text(game.time.suggestedFps, 32, 32);
           },
       }

           game.state.add('Map', map)
       game.state.add('Fields', fields)
if (!Meteor.user().savey || !Meteor.user().savex || !Meteor.user().area || !Meteor.user().load || Meteor.user().connected)
{
      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        'savey': 500,
        'savex': 0,
        'area': "map",
       'load' : true ,
       'connected' : 1,
      }
    });

game.state.start('Map');
}
else if (area === "map") {

      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        'load' : true ,

      }
    });
game.state.start('Map');
}
else if (area ===  fields)   {
      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        'load' : true ,

      }
    });
game.state.start('Fields');

}


      this.rendered = true;
    }
  }


  Template.needlogin.rendered = function() {
    if (!this.rendered) {
      $('body').css('background-image', 'url(/moonback.png)');
      this.rendered = true;
    }
  };

  Template.store.rendered = function() {
    if (!this.rendered) {
      $('body').css('background-image', 'url(/background.jpg)');
      this.rendered = true;
    }
  };

  Template.leaderboards.rendered = function() {
    if (!this.rendered) {
      $('body').css('background-image', 'url(/scroll.png)');
      this.rendered = true;
    }
  };
  Template.leaderboards.rendered = function() {
    if (screen.width <= 1200) {
      window.location = "/no";

    } else {
      return false;
    }
  };


  Template.smalldash.rendered = function() {
    if (screen.width <= 1200) {
      console.log("derp");
      Blaze.remove(dash);
    }
  };
  Template.start.rendered = function() {

    window.location = "/home";

  };
  Template.no.rendered = function() {
    if (screen.width >= 900) {
      window.location = "/base";
    }
  };

  Template.ads.rendered = function() {
    $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
      var ads, adsbygoogle;
      ads = '<ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-5252557572574596"data-ad-slot="9460618067"data-ad-format="auto"></ins>';
      $('.leaderboard').html(ads);
      return (adsbygoogle = window.adsbygoogle || []).push({});
    });
  };

  Template.leaderboard.rendered = function() {
    if (!this.rendered) {
      $('body').css('background-image', 'url(/background.jpg)');
      this.rendered = true;
    }
  };

  Template.profile.rendered = function() {
     $("#viewbbcode").text(bbcode);
  };



  Template.player.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };
  Template.player.items = function() {
    return Items;
  }
  Template.player.user = function() {
    return Meteor.user();
  }


  Template.quest.user = function() {
    return Meteor.user();
  }



  Template.keeper.keeper = function() {
    var username1 = "QuestKeeper";
    return Meteor.users.findOne({
      username: username1
    });

  }


  Template.quest.keeper = function() {
    var username1 = "QuestKeeper";
    return Meteor.users.findOne({
      username: username1
    });

  }

  Template.leaderboard.keeper = function() {
    var username1 = "QuestKeeper";
    return Meteor.users.findOne({
      username: username1
    });

  }


  Template.tickbox.keeper = function() {
    var username1 = "QuestKeeper";
    return Meteor.users.findOne({
      username: username1
    });

  }



  Template.leaderboards.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };
  Template.leaderboards.items = function() {
    return Items;
  }
  Template.leaderboards.user = function() {
    return Meteor.user();
  }
  Template.search.user = function() {
    return Meteor.user();
  }
  Template.questleader.user = function() {
    return Meteor.user();
  }

  Template.player2.user = function() {
    return Meteor.user();
  }



  disqus_shortname = "questgrinders";


  Template.questleader.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'progress': -1
      }
    });
  };







  Template.cheat.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  };

  Template.search.players = function() {
    var one = Meteor.user().lastSearch;
    var done = Meteor.users.findOne({
      username: one
    });
    return done
  };








  Template.search.events({

    'submit': function(event) {
      event.preventDefault(); //prevent page refresh



      var derp = event.target.searchbar.value;



      Meteor.call('searched', derp);
    }
  });





  Template.status.events({

    'submit': function(event) {
      event.preventDefault(); //prevent page refresh



      var statusvar = event.target.status.value;


      alert("Submitted!");
      Meteor.call('submitme', statusvar);
    }
  });

  Template.avatar2.events({

    'submit': function(event) {
      event.preventDefault(); //prevent page refresh



      var avatarvar = event.target.avatar.value;


      alert("Submitted!");
      Meteor.call('setavatar2', avatarvar);
    }
  });


  Template.bbcodeeditor.events({

    'submit': function(event) {
      event.preventDefault(); //prevent page refresh



      var bbcode = event.target.editor.value;


      alert("Submitted!");
      Meteor.call('setbbcode', bbcode);
    }
  });

  Template.gamejolt.events({

    'submit': function(event) {
      event.preventDefault(); //prevent page refresh



      var gjuser = event.target.g1.value;
      var gjtoken = event.target.g2.value;



      alert("Submitted!");
      Meteor.call('gj2', gjuser, gjtoken);
    }
  });






  Template.adventure.events({
    'click input.adventure': function() {
      Meteor.call('adventure');
    }
  });





  Template.leaderboards.events({
    'click input.buy': function(event) {
      Meteor.call('buy', event.target.id);
    }
  });


  Template.cheat.user = function() {
    return Meteor.user();
  }


  Template.cheat.events({
    'click input.cheat': function() {
      Meteor.call('cheat');
    }
  });






  Template.store.players = function() {
    return Meteor.users.find({}, {
      sort: {
        'money': -1
      }
    });
  };
  Template.store.items = function() {
    return Items;
  }
  Template.store.user = function() {
    return Meteor.user();
  }

  Template.spyshop.user = function() {
    return Meteor.user();
  }

  Template.profile.user = function() {
    return Meteor.user();
  }


  Template.store.events({
    'click input.code': function() {
      Meteor.call('click');

    },

  'click input.exit': function() {
     Session.set('isHome', false)

    }

  });

  Template.store.events({
    'click input.buy': function(event) {

      Meteor.call('buy', event.target.id);
    }
  });
  Template.store.events({
    'click input.power': function(event) {
      Meteor.call('power', event.target.id);
    }
  });

  Template.store.events({
    'click input.apower': function(event) {
      Meteor.call('apower', event.target.id);
    }
  });



  Template.store.events({
    'click input.mult': function(event) {
      Meteor.call('mult', event.target.id);
    }
  });

  Template.store.events({
    'click input.buya': function(event) {
      Meteor.call('buya', event.target.id);
    }
  });

  Template.store.events({
    'click input.buym': function(event) {
      Meteor.call('buym', event.target.id);
    }
  });



  Template.store.events({
    'click input.hpowerup': function(event) {
      Meteor.call('hpowerup', event.target.id);
    }
  });
  Template.store.events({
    'click input.spy': function(event) {

      if (Meteor.user().rate >= 0)
        var spyshop = "yesspyshop"
      else {
        var spyshop = "nospyshop"
      }
    }
  });

  Template.spyshop.events({
    'click input.buyspy': function(event) {
      Meteor.call('buyspy', event.target.id);
    }
  });

  Handlebars.registerHelper('formatCurrency', function(number) {
    return number.toLocaleString();
  });

}








if (Meteor.isServer) {



  Meteor.users.update({
  "status.online": false
}, {
  $set: {

   'connected' : 0,
  }
});


  Meteor.publish("userStatus", function() {
    return Meteor.users.find({
      "status.online": true
    });
  });

  Meteor.publish("userProfile", function(username) {
    // simulate network latency by sleeping 2s
    Meteor._sleepForMs(2000);
    // try to find the user by username
    var user = Meteor.users.findOne({
      username: username
    });
    // if we can't find it, mark the subscription as ready and quit
    if (!user) {
      this.ready();
      return;
    }
    // if the user we want to display the profile is the currently logged in user...
    if (this.userId == user._id) {
      // then we return the corresponding full document via a cursor
      return Meteor.users.find(this.userId);
    } else {
      // if we are viewing only the public part, strip the "profile"
      // property from the fetched document, you might want to
      // set only a nested property of the profile as private
      // instead of the whole property
      return Meteor.users.find(user._id, {
        fields: {
          "profile": 0
        }
      });
    }
  });


  Avatar.setOptions({
    customImageProperty: function() {
      var user = this;
      // calculate the image URL here
      return user.avatar2;
    },
    imageSizes: {
      'large': 150,
      'mySize': 90
    }
  });


  ProfileController = RouteController.extend({
    template: "profile",
    waitOn: function() {
      return Meteor.subscribe("userProfile", this.params.username);
    },
    data: function() {
      var username = Router.current().params.username;
      return Meteor.users.findOne({
        username: username
      });
    }
  });





  Meteor.startup(function() {


Meteor.setInterval(function() {
  keeper = Meteor.users.findOne({
      username: "QuestKeeper"
    });



var tick = keeper.tick
if (tick < 1441) {
    Meteor.users.update({
      username: "QuestKeeper"

    }, {
      $inc: {
        'tick': 1,


      },


    });


}
else {

    Meteor.users.update({
      username: "QuestKeeper"

    }, {
      $inc: {
        'cycle': 1,


      },
	$set: {
        'tick': 0,


      },


    });

}



    }, 60000)










    Meteor.setInterval(function() {


      Meteor.users.find({}).map(function(user) {
        Meteor.users.update({
          _id: user._id
        }, {
          $inc: {
            'money': user.rate * user.heropower,
            'exp': user.rate / 100
          },



        })
      });




    }, 1500)



    Meteor.setInterval(function() {

      Meteor.users.find({}).map(function(user) {
        Meteor.users.update({
          _id: user._id
        }, {
          $inc: {
            'money': user.mage * 2 * user.magepower,


          }



        })
      });




    }, 3000)





    Meteor.setInterval(function() {

      Meteor.users.find({}).map(function(user) {
        Meteor.users.update({
          _id: user._id
        }, {
          $inc: {
            'money': user.archer * user.archerpower,


          }



        })
      });




    }, 500)

  });









  Accounts.onCreateUser(function(options, user) {


    user.cheat = "(Member)"
    user.cost = 1000;
    user.money = 0;
    user.rate = 0;

    user.adv = 10;
    user.power = 25;
    user.pcost = 1000000;
    user.mult = 1;
    user.wepcost = 1000000000000;
    user.heropower = 1;
    user.hpowercost = 1500000;
    user.spycost = 100;
    user.spy = 0;
    user.archer = 0;
    user.archerprice = 20000;
    user.archerpower = 1;
    user.archerpcost = 10000;
    user.magepcost = 100000;
    user.magepower = 1;

    user.mage = 0;
    user.mageprice = 150000;

    return user;


  });


  Meteor.publish("userData", function() {
    return Meteor.users.find({}, {
      sort: {
        'rate': -1
      }
    });
  });


}









Meteor.methods({



  gj2: function(gjuser, gjtoken) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'gjuser': gjuser,
        'gjtoken': gjtoken,
      }


    });

    console.log(gjuser)

  },

  setavatar2: function(avatarvar) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'avatar2': avatarvar
      }


    });

    console.log(avatarvar)
  },


  updatePosition: function(x,y,area) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'savex': x,
        'savey': y,
        'area': area,
      }


    });

  },
  setbbcode: function(bbcode) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'bbcode': bbcode
      }


    });

    console.log(bbcode)
  },

  reset: function() {


    Meteor.users.update({
      _id: this._id
    }, {

      $set: {
        'attacks': 3
      }


    });


  },


  submitme: function(statusvar) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'status3': statusvar
      }


    });

    console.log(statusvar)
  },


  searched: function(derp) {


    var searched = derp;
    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'lastSearch': searched
      }


    });
    var searched2 = Meteor.user().lastSearch;

    console.log(searched);
    Meteor.call('s2');
    return searched2
  },




  s2: function() {


    var searched2 = Meteor.user().lastSearch;
    console.log(searched2);
    return searched2






  },


  attack: function(target) {


    Meteor.users.update({
      _id: this.userId
    }, {

      $set: {
        'attack': target
      }


    });

    Meteor.call('attack2');


  },

  attack2: function(target) {


    var person = Meteor.users.findOne({
      'username': target
    }, );





  },





  adventure: function() {
    if (Meteor.user().adv > 0) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'adv': -1
        }
      });
      Blaze.render(Template.adv, $('body').get(0));
    } else {
      Blaze.render(Template.noadventures, $('body').get(0));
    }
  },








  buyspy: function(amount) {
    var spyrate = Meteor.user().spy;
    var spycostnew = spyrate * 10000;
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'spy': 1,
          'spycost': spycostnew,
          'money': (0 - amount),
        }
      });


  },

  buya: function(amount) {
    var archer = Meteor.user().archer;
    var cost = archer * 1500;
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'archer': 1,
          'archerprice': cost,
          'money': (0 - amount),
        }
      });


  },

  buyi: function(amount) {
    var archer = Meteor.user().archer;
    var cost = archer * 1500;
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'archer': 1,
          'archerprice': cost,
          'money': (0 - amount),
        }
      });


  },


  buym: function(amount) {
    var mage = Meteor.user().mage;
    var cost = mage * 500;
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'mage': 1,
          'mageprice': cost,
          'money': (0 - amount),
        }
      });


  },

  buy: function(amount) {
    var hero = Meteor.user().rate;
    var cost = hero * 100;
    if (Meteor.user().money >= amount && amount > 0)

      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'rate': 1,
          'cost': cost,
          'money': (0 - amount),
        }
      });


  },

  power: function(amount) {
    var power = Meteor.user().power
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'power': 5,
          'pcost': power * 10,
          'money': (0 - amount),
        }
      });


  },

  apower: function(amount) {
    var power = Meteor.user().archerpcost / 2
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'archerpower': 1,
          'archerpcost': cost,
          'money': (0 - amount),
        }
      });


  },

  mult: function(amount) {
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'mult': 1,
          'wepcost': 1000000000000,
          'money': (0 - amount),
        }
      });


  },


  hpowerup: function(amount) {
    if (Meteor.user().money >= amount && amount > 0)
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          'heropower': 1,
          'hpowercost': 1000000000000,
          'money': (0 - amount),
        }
      });


  },


  click: function() {

    var power = Meteor.user().power;
    var mult = Meteor.user().mult;

    Meteor.users.update({
      _id: this.userId
    }, {
      $inc: {
        'money': power * mult,
        'lifetimeclick': 1,
        'done': 0,
        'done2': 0,
        'done3': 0,
        'done4': 0,
        'done5': 1,
        'progress': 1,
      },


    });

    Meteor.users.update({
      username: "QuestKeeper"

    }, {
      $inc: {
        'progress': 1,


      },


    });
    Meteor.call('spyset');
  },

  champrandom: function(amount) {
     var costincrease = champroll * 100;
     var cost = Meteor.user().cost;
     if (Meteor.user().money >= amount && amount > 0)
       Meteor.users.update({
         _id: this.userId
       }, {
         $inc: {
           'champroll': 1,
           'cost': costincrease,
           'money': (0 - amount),
         }
       });
     var champlevel = Math.floor(Math.random() * 100) + 1 ;
     if (champlevel <= 75){

     };


   },

 createchamp: function(name, eff, attack, hp, def) {
   var user = this.userId

 db.users.insert(
    {
       name: name,
       attack: attack,
       hp: hp,
       def: def,
       eff: eff,
       owner: user,
    }
 );


   },





  spyset: function() {
    if (Meteor.user().done5 < 150)

      Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        'power': 25,
        'pcost': 100000,
        'done5': 200,

      }
    });
  },









});
