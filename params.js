var PARAMS = {
  preload : {
    audio: [
      "sounds/bikuti-resampled.wav",
      "sounds/budopa-resampled.wav",
      "sounds/daropi-resampled.wav",
      "sounds/golatu-resampled.wav",
      "sounds/kudabi-resampled.wav",
      "sounds/pabiku-resampled.wav",
      "sounds/pigola-resampled.wav",      
      "sounds/tibudo-resampled.wav",
      "sounds/tigobu-resampled.wav",
      "sounds/tudaro-resampled.wav",
      "sounds/block-1-stim.mp3",
      "sounds/block-2-stim.mp3",
      "sounds/block-3-stim.mp3", 
      "sounds/silence.wav"
    ], 
    videos: [
      "video/Pingu_Block1.mp4",
      "video/Pingu_Block2.mp4",
      "video/Pingu_Block3.mp4"
    ],
    images: [
      "images/pingu-wait.png", 
      "images/pingu-listens.png",
      "images/pingu-option-blue.png",
      "images/pingu-option-both.png", 
      "images/pingu-option-purple.png",
      "images/block-1-comp-c.png", 
      "images/block-1-comp-f.png", 
      "images/block-2-comp-c.png", 
      "images/block-2-comp-f.png", 
      "images/block-3-comp-c.png", 
      "images/block-3-comp-f.png"
    ]
  }, 
  conditions : {
    AFC : {
      name: "AFC",
      instructions: {
        exposure: "Today we are going to watch some fun videos and play a game. In the videos, you are going to see Pingu, the little penguin, talking to her family and friends in the penguin language. Watch as Pingu goes about her day and listen carefully to the penguin language. Between videos, you will be asked comprehension questions about what Pingu was doing, so make sure that you are paying attention. Click the green button to start watching the video.",
        practice: "Great job! Now you and Pingu are going to play a game. In this game, Pingu will say two things, one after the other. Your job is to decide which one of them is a word in the penguin language. Listen carefully to both words, and then choose the one you think is a real word in Pingu’s language. Are you ready to play? Click the green button to continue, and we’ll do a few practice rounds to get the hang of it.", 
        test: "Great job! Now that you’ve gotten the hang of it, you and Pingu are going to play this game some more. Listen carefully to both words, and then do your best to choose the one you think is a real word in Pingu’s language. Click the green button to play the game.", 
      },
      test: {
        list1: [
          {sound1: "sounds/bikuti-resampled.wav", sound2: "sounds/daropi-resampled.wav" }, 
          {sound1: "sounds/budopa-resampled.wav", sound2: "sounds/golatu-resampled.wav"},
          {sound1: "sounds/pabiku-resampled.wav", sound2: "sounds/tudaro-resampled.wav"}, 
          {sound1: "sounds/daropi-resampled.wav", sound2: "sounds/budopa-resampled.wav"}
        ],
        list2: [
          {sound1: "sounds/bikuti-resampled.wav", sound2: "sounds/daropi-resampled.wav" }, 
          {sound1: "sounds/budopa-resampled.wav", sound2: "sounds/golatu-resampled.wav"},
          {sound1: "sounds/pabiku-resampled.wav", sound2: "sounds/tudaro-resampled.wav"}, 
          {sound1: "sounds/daropi-resampled.wav", sound2: "sounds/budopa-resampled.wav"}
        ]
     }
    }, 
    RATING: {
      name: "RATING",
      instructions: {
        exposure: "Today we are going to watch some fun videos and play a game. In the videos, you are going to see Pingu, the little penguin, talking to her family and friends in the penguin language. Watch as Pingu goes about her day and listen carefully to the penguin language. Between videos, you will be asked comprehension questions about what Pingu was doing, so make sure that you are paying attention. Click the green button to start watching the video.",
        practice: "Great job! Now you and Pingu are going to play a game. In this game, Pingu will say something, and your job is to rate how much it sounds like a word in the penguin language. Listen carefully to what Pingu says, and then use the sliding scale on the screen to rate it. The scale goes from ‘not at all like a penguin word’ to ‘definitely a penguin word.’ Are you ready to play? Click the green button to continue, and we’ll do a few practice rounds to get the hang of it.", 
        test: "Great job! Now that you’ve gotten the hang of it, you and Pingu are going to play this game some more.  Listen carefully to what Pingu says, and then use the sliding scale on the screen to rate it. Remember, the scale goes from ‘not at all like a penguin word’ to ‘definitely a penguin word.’ Click the green button to play the game. ", 
      },
      test: {
        list1: [
          {sound1: "sounds/bikuti-resampled.wav", category1: "W"}, 
          {sound1: "sounds/daropi-resampled.wav", category1: "PW"},
          {sound1: "sounds/budopa-resampled.wav"}, 
          {sound1: "sounds/golatu-resampled.wav"}
        ],
        list2: [
          {sound1: "sounds/bikuti-resampled.wav"}, 
          {sound1: "sounds/daropi-resampled.wav"},
          {sound1: "sounds/budopa-resampled.wav"}, 
          {sound1: "sounds/golatu-resampled.wav"}
        ]
      }
    }, 
    SICR: {
      name: "SICR",
      instructions: {
        exposure: "Today we are going to watch some fun videos and play a game. In the videos, you are going to see Pingu, the little penguin, talking to her family and friends in the penguin language. Watch as Pingu goes about her day and listen carefully to the penguin language. Between videos, you will be asked comprehension questions about what Pingu was doing, so make sure that you are paying attention. Click the green button to start watching the video.",
        practice: "Great job! Now you and Pingu are going to play a game. In this game, Pingu is going to say some words. After she finishes speaking, your job is to say exactly what Pingu said out loud. To play this game, listen to Pingu very carefully. After Pingu is done talking, say exactly what she said when you see that he is ready to listen. Are you ready to play? Click the green button to continue, and we will do a few rounds to practice playing this game.", 
        test: "Great job! Now that you’ve gotten the hang of it, you and Pingu are going to play this game some more. Some of the things that Pingu says will be a little longer this time. Do your best to repeat what Pingu says when you see that she is ready to listen. Click the green button to play the game.", 
      },
      test: {
        list1: [
          {sound1: "sounds/bikuti-resampled.wav", sound2: "sounds/daropi-resampled.wav" }, 
              {sound1: "sounds/budopa-resampled.wav", sound2: "sounds/golatu-resampled.wav"},
              {sound1: "sounds/pabiku-resampled.wav", sound2: "sounds/tudaro-resampled.wav"}, 
              {sound1: "sounds/daropi-resampled.wav", sound2: "sounds/budopa-resampled.wav"}
          ],
        list2: [
          {sound1: "sounds/bikuti-resampled.wav", sound2: "sounds/daropi-resampled.wav" }, 
              {sound1: "sounds/budopa-resampled.wav", sound2: "sounds/golatu-resampled.wav"},
              {sound1: "sounds/pabiku-resampled.wav", sound2: "sounds/tudaro-resampled.wav"}, 
              {sound1: "sounds/daropi-resampled.wav", sound2: "sounds/budopa-resampled.wav"}
          ]
      }
    }
  }
}
