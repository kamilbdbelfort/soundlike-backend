"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "sounds",
      [
        {
          name: "Do or do not. there is no try",
          description: "Starwars yoda: Do or do not. there is no try",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742453/star-wars-do-or-do-not-there-is-no-try_kh37sz.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742455/star-wars-yoda-do-or-do-not_ijbaqj.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rex roaring",
          description: "Jurrassicpark, rex roaring sound",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742453/JurassicPark-Tyrannosaurus_rex-Roaring_iha4xa.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742454/jurassic-park-trex-roaring_lrixoj.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "300 spartans",
          description: "300 spartans, this is sparta",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742452/300_This_is_Sparta_yo49ud.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742453/300-this-is-sparta_vfruhz.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "James Bond",
          description: "Bond, James Bond",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742452/Bond_James_Bond_r5ehnf.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742453/bond-james-bond_ryr0ri.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Borat",
          description: "Hi 5",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742452/borat-high-five_vljptk.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742452/borat-high-five_xrtdg0.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zombie",
          description: "Gasping Zombie",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634742275/gasping_zombie_t3xjcw.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634742275/gasping_zombie_tqqp7a.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hacker",
          description: "Hacker",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741500/computer_hacker_attizm.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741501/computer_hacker_haqmtk.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Train whistle",
          description: "Toy train whistle",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741038/mixkit-toy-train-whistle-1631_vzphvh.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741038/mixkit-toy-train-whistle-1631_hpo33c.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Truck horn",
          description: "Truck honking",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741038/mixkit-truck-horn-720_unvnpj.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741038/mixkit-truck-horn-720_zpa0bu.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spaceship engine",
          description: "Spaceship engine sound",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741037/mixkit-futuristic-engine-sounds-2738_hgwsrl.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741037/mixkit-futuristic-engine-sounds-2738_lwpy7c.gif",
          played: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spaceship landing",
          description: "Spaceship Landing",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741037/mixkit-spaceship-landing-2735_ifhmdm.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741037/mixkit-spaceship-landing-2735_cx8kw8.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BasketBall",
          description: "Falling basketball sound",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741036/mixkit-basketball-falling-indoor-394_hyhakt.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741037/mixkit-basketball-falling-indoor-394_yxhkmk.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laugh",
          description: "Cartoon laugh",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741036/mixkit-cartoon-voice-laugh-343_v0br5m.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741037/mixkit-cartoon-voice-laugh-343_eh56km.gif",
          played: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Failure",
          description: "Sound of Failure",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634741036/mixkit-cartoon-failure-piano-473_micb8o.wav",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634741036/mixkit-cartoon-failure-piano-473_n3nmg5.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Light Saber",
          description: "Starwars lightsaber sound",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740913/Star-Wars-Lightsabers_rdjdcx.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740914/star-wars-lightsabers_alh3dk.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "I'll be back",
          description: "Terminator: I'll be back",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740913/Terminator_I_ll_Be_Back_Sound_Effect_bvmxft.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740914/terminator-ill-be-back_jdx5ux.gif",
          played: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "R2D@",
          description: "Startwars R2D2 sound",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740913/star-wars-R2D2_mugxuu.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740913/star-wars-r2-d2_ujczdh.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forest gump",
          description: "Run forest run",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740896/Forest_Gump_Run_Forrest_run_uwj1ci.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740897/forest-gump-run-forest-run_duky78.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chewbacca",
          description: "Starwars Chewbacca arrrrrr",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740896/Chewbacca-arrr_p26hrn.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740896/chewbacca-arrr_fbntw4.gif",
          played: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darth vader",
          description: "You don't know the power of darkside",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740896/Darth-vader-dark-sider_aojlkt.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740896/darth-vader-dark-side_mzleuv.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "OMG!",
          description: "Janice from Friends OMGing",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634740173/friends-oh-my-god_xkmcug.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634740174/friends-oh-my-god_ydhqae.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "We were on a break",
          description: "Ross from Friends, they were on a break!",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634739301/friends-we-were-on-a-break_wrpje1.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634739301/friends-we-were-on-a-break_y1vk5a.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Joey doesn't share food",
          description: "No need for description",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634739300/friends-joey_doesnt_share_food_bz6yhk.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634739301/friends-joey_doesnt_share_food_lpvjuw.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pika",
          description: "Pikachu",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634739158/Pikachuu-pika-pika_tygbuu.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634739159/pikachu-pika-pika_vkix31.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "How you doin?",
          description: "Joey shows his interest",
          soundURL:
            "https://res.cloudinary.com/sound-like/video/upload/v1634736591/Friends_Joey_How_You_Doin_Sound_Effect_cxejas.mp3",
          imageURL:
            "https://res.cloudinary.com/sound-like/image/upload/v1634736592/joey-friends-how-you-doin_xxwsu4.gif",
          played: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
