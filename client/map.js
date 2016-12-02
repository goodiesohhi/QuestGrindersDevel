    var player;
    var facing = 'left';
    var jumpTimer = 0;
    var cursors;
    var jumpButton;
    var bg;
var map =  {



    preload: function() {

        game.load.image('dude', '/hero.png');
        game.load.image('background', '/background.jpg');
        game.load.image('shack', '/assets/shack.png');

    },


    create: function() {
       game.world.setBounds(0, 0, 1920, 600);
         game.physics.startSystem(Phaser.Physics.ARCADE);

        game.time.desiredFps = 30;

        bg = game.add.tileSprite(0, 0, 800, 600, 'background');

        game.physics.arcade.gravity.y = 250;

        player = game.add.sprite(589, 32, 'dude');
        shack = game.add.sprite(589, 10, 'shack');
        game.physics.enable(player, Phaser.Physics.ARCADE);

        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;
        player.body.setSize(40, 125);



        cursors = game.input.keyboard.createCursorKeys();
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      game.camera.follow(player);
    }

    update:  function() {

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
	else if (cursors.up.isDown && game.physics.arcade.overlap(this.player, this.shack) )
        {


                window.location.href = "https://questgrinders.herokuapp.com/store";

        }
        else
        {
            if (facing != 'idle')
            {
                player.animations.stop();

                if (facing == 'left')
                {
                    player.frame = 0;
                }
                else
                {
                    player.frame = 5;
                }

                facing = 'idle';
            }
        }

        if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
        {
            player.body.velocity.y = -250;
            jumpTimer = game.time.now + 750;
        }

    }

    render:  function() {

        game.debug.text(game.time.suggestedFps, 32, 32);

        // game.debug.text(game.time.physicsElapsed, 32, 32);
        // game.debug.body(player);
        // game.debug.bodyInfo(player, 16, 24);







    }
}
