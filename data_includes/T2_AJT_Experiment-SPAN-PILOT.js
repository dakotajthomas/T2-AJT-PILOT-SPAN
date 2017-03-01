var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "AJT_Introduction-SPAN-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],

//PRACTICE//
    ["practice", "AcceptabilityJudgment", {s: "This is a practice sentence to get you used to reading sentences like this.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is another practice sentence for you to read.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["practice", "AcceptabilityJudgment", {s: "This is the last practice item before the experiment begins.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    
    ["sep", "Separator", { }], 
    
//Experimental Items//
  //Uncountable Substance//
    //rice//
    ["ms7-zs", "AcceptabilityJudgment", {s: "She likes to use rice instead of stuffing.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms7-zp", "AcceptabilityJudgment", {s: "They often use rices to stuff the peppers and make dinner.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms7-i",  "AcceptabilityJudgment", {s: "There seemed to be a rice on the plate.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["ms7-ds", "AcceptabilityJudgment", {s: "Did you get the rice for the recipe?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["ms7-dp", "AcceptabilityJudgment", {s: "I like the rices that I get when I have Korean food.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //cinnamon//
    ["ms8-zs", "AcceptabilityJudgment", {s: "There is an abundance of cinnamon in the cupboard.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms8-zp", "AcceptabilityJudgment", {s: "There are not many people who like cinnamons in their hot cocoa.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms8-i",  "AcceptabilityJudgment", {s: "Johnathan asked for a cinnamon to be added to his coffee.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["ms8-ds", "AcceptabilityJudgment", {s: "Can you believe the cinnamon was not properly added to the recipe?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms8-dp", "AcceptabilityJudgment", {s: "I was looking for the cinnamons, but in the wrong place.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //ice//
    ["ms9-zs", "AcceptabilityJudgment", {s: "I would like ice in my coffee, please.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms9-zp", "AcceptabilityJudgment", {s: "We will need ices for the guests that are coming to our house.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms9-i",  "AcceptabilityJudgment", {s: "Do you have an ice for my drink that is outside?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms9-ds", "AcceptabilityJudgment", {s: "I like that the ice is already in the cup.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["ms9-dp", "AcceptabilityJudgment", {s: "I think the ices will be melted by the time we arrive.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Uncountable Object//
    //fruit//
    ["mo7-zs", "AcceptabilityJudgment", {s: "Debbie said she likes to have fruit with her lunch.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo7-zp", "AcceptabilityJudgment", {s: "There were fruits on the counter for you to take with you.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo7-i",  "AcceptabilityJudgment", {s: "Do you have a fruit for your lunch?", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["mo7-ds", "AcceptabilityJudgment", {s: "You can have the fruit for your dessert.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["mo7-dp", "AcceptabilityJudgment", {s: "She had said the fruits were for eating.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //money//
    ["mo8-zs", "AcceptabilityJudgment", {s: "Tanner does not have money to pay you back.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo8-zp", "AcceptabilityJudgment", {s: "Did you put the monies in the bank like I told you?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo8-i",  "AcceptabilityJudgment", {s: "There was a money on the floor earlier but somebody picked it up.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["mo8-ds", "AcceptabilityJudgment", {s: "Where is the money that I gave you for your birthday?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo8-dp", "AcceptabilityJudgment", {s: "You said that you put the monies in a safe place.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //clothing//
    ["mo9-zs", "AcceptabilityJudgment", {s: "I was looking for clothing when i found the remote.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo9-zp", "AcceptabilityJudgment", {s: "I thought that you would be interested in clothings but I was wrong.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo9-i",  "AcceptabilityJudgment", {s: "We saw a clothing on the couch earlier but put in on the table.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo9-ds", "AcceptabilityJudgment", {s: "What do you think of the clothing that I bought for my trip?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["mo9-dp", "AcceptabilityJudgment", {s: "Jeff told me the clothings on the couch were for someone else.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Countable [+prototypical]//
    //girl//
    ["c7-zs", "AcceptabilityJudgment", {s: "I saw that there was girl in the park earlier.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c7-zp", "AcceptabilityJudgment", {s: "I like girls and my broth does, too.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c7-i",  "AcceptabilityJudgment", {s: "When I was on the bus, I saw a girl who looked like she was lost.", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["c7-ds", "AcceptabilityJudgment", {s: "I was wondering if the girl had found her way to the bus or not.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["c7-dp", "AcceptabilityJudgment", {s: "Skye is friends with the girls who live down the street.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //cat//
    ["c8-zs", "AcceptabilityJudgment", {s: "I could not believe cat was in the kitchen.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c8-zp", "AcceptabilityJudgment", {s: "She likes to adopt cats from the animal shelter.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c8-i",  "AcceptabilityJudgment", {s: "I have a cat that likes to play with all of the children.", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["c8-ds", "AcceptabilityJudgment", {s: "He said the cat that was in the yard belongs to the neighbors.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c8-dp", "AcceptabilityJudgment", {s: "I cannot believe she let the cats come into the house like that.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //computer//
    ["c9-zs", "AcceptabilityJudgment", {s: "They were looking for computer but they found something else.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c9-zp", "AcceptabilityJudgment", {s: "The school bought computers for every student in their final year.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c9-i",  "AcceptabilityJudgment", {s: "I have a computer if you would like to borrow it.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c9-ds", "AcceptabilityJudgment", {s: "Debbie said the computer on the desk is very big.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["c9-dp", "AcceptabilityJudgment", {s: "The library said the computers were for everyone to use.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Countable [-prototypical]//
    //explosion//
    ["cnp7-zs", "AcceptabilityJudgment", {s: "There was explosion in the field earlier today.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp7-zp", "AcceptabilityJudgment", {s: "Do you think explosions are as powerful as the scientists say?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp7-i",  "AcceptabilityJudgment", {s: "Did you see an explosion earlier today?", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["cnp7-ds", "AcceptabilityJudgment", {s: "They should give a warning before the explosion scares everyone like that.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["cnp7-dp", "AcceptabilityJudgment", {s: "I do not like the explosions that happen on the weekends.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //NOUN//
    ["cnp8-zs", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp8-zp", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp8-i",  "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["cnp8-ds", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp8-dp", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //NOUN//
    ["cnp9-zs", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp9-zp", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp9-i",  "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp9-ds", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["cnp9-dp", "AcceptabilityJudgment", {s: "SENTENCE", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
  //Flexible//
    //hamburger//
    ["f7-zs", "AcceptabilityJudgment", {s: "Do you consider hamburger to be your meat of choice?", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f7-zp", "AcceptabilityJudgment", {s: "We should make hamburgers for dinner tonight!", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f7-i",  "AcceptabilityJudgment", {s: "Would you like to have a hamburger for dinner tonight?", as: ["1", "2", "3", "4", "5", "6", "7"]}],   
    ["f7-ds", "AcceptabilityJudgment", {s: "I think the hamburger tastes a little bad.", as: ["1", "2", "3", "4", "5", "6", "7"]}],
    ["f7-dp", "AcceptabilityJudgment", {s: "Where did you put the hamburgers that I cooked earlier?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //glass//
    ["f8-zs", "AcceptabilityJudgment", {s: "Why is there glass all over the floor in here?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f8-zp", "AcceptabilityJudgment", {s: "I have glasses that can be used for water.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f8-i",  "AcceptabilityJudgment", {s: "Where is a glass that I can use for water?", as: ["1", "2", "3", "4", "5", "6", "7"]}],    
    ["f8-ds", "AcceptabilityJudgment", {s: "I want you to put the glass in the sink when you are done with it.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f8-dp", "AcceptabilityJudgment", {s: "Can you clean the glasses that are in the sink?", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    //hair//
    ["f9-zs", "AcceptabilityJudgment", {s: "I could not believe that there was hair on the table.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f9-zp", "AcceptabilityJudgment", {s: "There are hairs on the floor that have fallen off of someone.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f9-i",  "AcceptabilityJudgment", {s: "Oh my, I just found a hair in my brownie that I got at the cafeteria.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f9-ds", "AcceptabilityJudgment", {s: "I was looking for the hair that came from the hairdresser.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
    ["f9-dp", "AcceptabilityJudgment", {s: "I tried to clean the hairs form the floor but it was nearly impossible.", as: ["1", "2", "3", "4", "5", "6", "7"]}],  
];