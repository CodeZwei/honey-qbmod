(() => {
  const mod = new Mod("honey");
  mod.name = "Honey";
  const {quest, dialogue} = mod;

  mod.init = () => {
    // Adding a deep throat quest
    const honeyQuest = quest.addQuest('honeyQuest', 'Deepthroat Quest', false);
    const tree = dialogue.addDialogueTree('honeyQuestTree', true);

    // Start subquest
    const questStart = honeyQuest.addSubQuest('honeyQuest-start')
      .setCondition(true)
      .setProgress(true)
      .setMapKey('TownSquare')
      .setDialogueTree('honeyQuestTree');
    tree.addBranch('honeyQuestTree-start')
      .talk('Mayor', 'Are you ready to cum in all the best throats of the land?')
      .setFuta('Queen', true)
      .talk('Queen', 'Ready and willing!', 'Happy')
      .completeQuest(honeyQuest.getID(), questStart.getID());
    questStart.setDialogueBranch('honeyQuestTree-start');
    honeyQuest.setStart(questStart.getID());

    // Suki sub quest
    const questSuki = honeyQuest.addSubQuest('honeyQuestSuki');
    questSuki.setCondition(() => questStart.isComplete());
    questSuki.setMapKey('VillageHangout');
    questSuki.setDialogueTree('honeyQuestTree');
    questSuki.setProgress(true);
    tree.addBranch('honeyQuestTree-suki')
      .setFuta('Queen', true)
      .setNaked('Queen', true)
      .talk('Queen', "Suck my dick!", "Angry")
      .setNaked('Suki', true)
      .setFuta('Suki', true)
      .talk('Suki', "Of course Ma'am!", "Happy")
      .talk('Queen', "Your throat feels sooo good!", "Blush")
      .talk('Queen', "I'm going to cum in your throat!", "Blush")
      .talk('Suki', "Mm-hpmm-ph!", "Surprise")
      .Flash()
      .cumOn('Queen', 'Futa', 1)
      .talk('Queen', "Wow that felt amazing!", "Blush")
      .cumOn('Suki', 'Throat', 3)
      .cumOn('Suki', 'Tits', 1)
      .talk('Suki', "Only the best for you!", "Happy")
      .completeQuest(honeyQuest.getID(), questSuki.getID());
    questSuki.setDialogueBranch('honeyQuestTree-suki');

    // Natasha sub quest
    const questNat = honeyQuest.addSubQuest('honeyQuestNat');
    questNat.setCondition(() => questStart.isComplete());
    questNat.setMapKey('TrasoniaLibrary');
    questNat.setDialogueTree('honeyQuestTree');
    questNat.setProgress(true);
    tree.addBranch('honeyQuestTree-natasha')
      .setNaked('Queen', false)
      .setFuta('Queen', true)
      .talk('Queen', "Hey Natasha, you getting bored of studying?", "Happy")
      .setNaked('Natasha', false)
      .setFuta('Natasha', true)
      .talk('Natasha', "Yeah, I wish I had something to help me relax.", "Sad")
      .setNaked('Queen', true)
      .talk('Queen', "How about a quick round of throat fucking?", "Neutral")
      .talk('Natasha', "Ooh, that does sound tasty!", "Blush")
      .talk('Queen', "Then get on your knees, you little slut!", "Angry")
      .talk('Natasha', "Yes Ma'am!", "Surprise")
      .talk('Queen', "Very good, now lick it slowly and use your hands.", "Neutral")
      .talk('Natasha', "Natasha takes Queen's member in her hands and softly runs her tongue along its length.", "Happy")
      .talk('Queen', "Queen gives a small shudder. You- you are really good at this.", "Blush")
      .talk('Queen', "Take off your cloths. I want to see your body.", "Neutral")
      .setNaked('Natasha', true)
      .talk('Natasha', "Without a word, Natasha gingerly strips off her blouse and panties.", "Happy")
      .talk('Natasha', "Let me show you what I can do!", "Angry")
      .talk('Natasha', "Natasha grabs Queen's hips and thrusts her cock into the depths of her throat!", "Blush")
      .talk('Queen', "Oh wow! I can feel your throat squeezing my cock.", "Surprise")
      .talk('Queen', "Queen grabs Natasha head with both hands and begins to thrust down her throat.", "Blush")
      .talk('Natasha', "Mhmm-mmph. Natasha coos happily, causing light vibrations in her neck.", "Happy")
      .talk('Queen', "Oh I'm going to cum!", "Blush")
      .Flash()
      .cumOn('Queen', 'Futa', 1)
      .cumOn('Natasha', 'Throat', 1)
      .talk('Natasha', "Natasha burries Queen's pulsating member in her throat as Queen reaches orgasm.", "Blush")
      .Flash()
      .cumOn('Natasha', 'Throat', 1)
      .talk('Natasha', "Natasha feels warm cum hit the back of her throat. Sending a shiver down her spine.", "Blush")
      .Flash()
      .cumOn('Natasha', 'Futa', 1)
      .talk('Natasha', "Her mind goes blank, her body rocked by euphoria as she cums as well!", "Blush")
      .talk('Queen', "Queens face is contorted with pleasure as she sways, pulsing cum down the young elf's throat!", "Blush")
      .Flash()
      .cumOn('Natasha', 'Throat', 1)
      .cumOn('Natasha', 'Tits', 1)
      .talk('Natasha', "One last stream of cum fills Natasha's mouth, dripping past her clasped lips to covers her breasts.", "Happy")
      .talk('Queen', "Queen finally releases Natasha'a head and withdraws her wet, pulsing length. Wow that felt amazing!", "Blush")
      .talk('Natasha', "With a blank, blissful look Natasha nods. She swallows the remaining wad of cum like a good slut.", "Neutral")
      .setNaked('Queen', false)
      .talk('Queen', "Thanks Natasha, that definitely cleared my head.", "Happy")
      .setNaked('Natasha', false)
      .talk('Natasha', "Me too, I'm feeling relaxed now! Guess it's time to hit the books. See you around!", "Neutral")
      .completeQuest(honeyQuest.getID(), questNat.getID());
    questNat.setDialogueBranch('honeyQuestTree-natasha');

    // End subquest (resets all the quests)
    const questEnd = honeyQuest.addSubQuest('honeyQuestEnd')
      .setProgress(true)
      .setCondition(() => {
        return questSuki.isComplete() && questNat.isComplete();
      })
      .setMapKey('TownSquare')
      .setDialogueTree('honeyQuestTree');
    tree.addBranch('honeyQuestTree-end')
      .talk('Mayor', 'Marvelous job!')
      .talk('Queen', 'Deepthroat really is the best!', 'Blush')
      .talk('Mayor', 'Care for another round?')
      .talk('Queen', 'Always', 'Happy')
      .completeQuest(honeyQuest.getID(), questEnd.getID());
    questEnd.setDialogueBranch('honeyQuestTree-end');
    questEnd.setOnComplete(() => {
      // Reset the quest
      questStart.setStatus(false);
      questSuki.setStatus(false);
      questNat.setStatus(false);
      questEnd.setStatus(false);
    })
    honeyQuest.setEnd(questEnd);
  };

  mod.boot = () => {
    // Add on reload code here
  }
})();
