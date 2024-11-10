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
      "sounds/exposure_1min30sec.wav"
    ], 
    videos: [
      "video/Pingu_Block1.mp4",
      "video/Pingu_Block2.mp4",
      "video/Pingu_Block3.mp4"
    ],
    images: [
      "images/pingu-still-wave.png",
      "images/pingu-blank.png",
      "images/pingu-listening.png",
      "images/pingu-option-blue.png",
      "images/pingu-option-both.png", 
      "images/pingu-option-purple.png"
    ]
  }, 
  conditions : {
    AFC : {
      name: "AFC",
      instructions: "AFC instructions here.",
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
      instructions: "Rating instructions here.",
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
      instructions: "SICR instructions here.", 
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