/************* 
 * Vttp *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'vttp';  // from the Builder filename that created this script
let expInfo = {
    '이름': '',
    '학번': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(counterbalanceRoutineBegin());
flowScheduler.add(counterbalanceRoutineEachFrame());
flowScheduler.add(counterbalanceRoutineEnd());
flowScheduler.add(start1RoutineBegin());
flowScheduler.add(start1RoutineEachFrame());
flowScheduler.add(start1RoutineEnd());
flowScheduler.add(start2RoutineBegin());
flowScheduler.add(start2RoutineEachFrame());
flowScheduler.add(start2RoutineEnd());
flowScheduler.add(start3RoutineBegin());
flowScheduler.add(start3RoutineEachFrame());
flowScheduler.add(start3RoutineEnd());
flowScheduler.add(start_expRoutineBegin());
flowScheduler.add(start_expRoutineEachFrame());
flowScheduler.add(start_expRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(dRoutineBegin());
flowScheduler.add(dRoutineEachFrame());
flowScheduler.add(dRoutineEnd());
flowScheduler.add(responseRoutineBegin());
flowScheduler.add(responseRoutineEachFrame());
flowScheduler.add(responseRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condi/condi1.xlsx', 'path': 'condi/condi1.xlsx'},
    {'name': 'video/15초 1번.mp4', 'path': 'video/15초 1번.mp4'},
    {'name': 'video/15초 3번.mp4', 'path': 'video/15초 3번.mp4'},
    {'name': 'video/15초 4번.mp4', 'path': 'video/15초 4번.mp4'},
    {'name': 'video/15초 6번.mp4', 'path': 'video/15초 6번.mp4'},
    {'name': 'video/15초 7번.mp4', 'path': 'video/15초 7번.mp4'},
    {'name': 'video/15초 8번.mp4', 'path': 'video/15초 8번.mp4'},
    {'name': 'video/15초 9번.mp4', 'path': 'video/15초 9번.mp4'},
    {'name': 'video/15초 11번.mp4', 'path': 'video/15초 11번.mp4'},
    {'name': 'video/15초 12번.mp4', 'path': 'video/15초 12번.mp4'},
    {'name': 'video/15초 13번.mp4', 'path': 'video/15초 13번.mp4'},
    {'name': 'video/15초 14번.mp4', 'path': 'video/15초 14번.mp4'},
    {'name': 'video/15초 15번.mp4', 'path': 'video/15초 15번.mp4'},
    {'name': 'condi/condi2.xlsx', 'path': 'condi/condi2.xlsx'},
    {'name': 'video/30초 1번.mp4', 'path': 'video/30초 1번.mp4'},
    {'name': 'video/30초 3번.mp4', 'path': 'video/30초 3번.mp4'},
    {'name': 'video/30초 5번.mp4', 'path': 'video/30초 5번.mp4'},
    {'name': 'video/30초 7번.mp4', 'path': 'video/30초 7번.mp4'},
    {'name': 'video/30초 10번.mp4', 'path': 'video/30초 10번.mp4'},
    {'name': 'video/30초 14번.mp4', 'path': 'video/30초 14번.mp4'},
    {'name': 'condi/condi3.xlsx', 'path': 'condi/condi3.xlsx'},
    {'name': 'video/60초 5번.mp4', 'path': 'video/60초 5번.mp4'},
    {'name': 'video/60초 6번.mp4', 'path': 'video/60초 6번.mp4'},
    {'name': 'video/60초 12번.mp4', 'path': 'video/60초 12번.mp4'},
    {'name': 'video/3분 10번.mp4', 'path': 'video/3분 10번.mp4'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\uc774\ub984"]}_${expInfo["\ud559\ubc88"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var start1Clock;
var text;
var start2Clock;
var text_3;
var start3Clock;
var text_7;
var start_expClock;
var text_4;
var key_resp;
var aClock;
var movie_15Clock;
var movie_15;
var bClock;
var movie_30Clock;
var movie_30;
var cClock;
var movie_60Clock;
var movie_60;
var dClock;
var movie_3Clock;
var movie_3;
var responseClock;
var text_5;
var textbox;
var key_resp_2;
var endClock;
var text_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "start1"
  start1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '2024학년도 1학기 [심리학 연구의 기초 기술] 수업의 일환으로, \n\n영상 시간이 시간지각에 미치는 영향을 알아보기 위한 실험입니다.\n\n총 15분 정도 소요될 예정입니다.',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start2"
  start2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '실험에 시작하기 앞서 소리를 꼭 들어야합니다.\n\n소리를 킬 수 있는 환경이면 음소거를 풀고,\n\n소리를 듣기 어려운 환경이면 이어폰을 사용해주세요.',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start3"
  start3Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '몇가지 영상을 보여드리겠습니다.\n\n여러분들은 영상을 시청한 후, 시간이 얼마나 흐른 것 같은지 초 단위로 입해주시면 됩니다.\n\n예) 10분 -> 600초',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.7, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_exp"
  start_expClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '스페이스바를 누르면 실험이 시작됩니다.',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "a"
  aClock = new util.Clock();
  movie_15Clock = new util.Clock();
  movie_15 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_15',
    units: 'height',
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [0.6, 1],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "b"
  bClock = new util.Clock();
  movie_30Clock = new util.Clock();
  movie_30 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_30',
    units: 'height',
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [0.6, 1],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "c"
  cClock = new util.Clock();
  movie_60Clock = new util.Clock();
  movie_60 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_60',
    units: 'height',
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [0.6, 1],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "d"
  dClock = new util.Clock();
  movie_3Clock = new util.Clock();
  movie_3 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_3',
    units: 'height',
    movie: 'video/3분 10번.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [1.8, 1],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '영상을 시청한 후, 시간이 얼마나 흐른 것 같나요?\n\n초 단위로 작성해주세요.\n\n예) 10분 -> 600초\n\n엔터를 누르면 실험이 종료됩니다.',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: '여기에 입력해주세요',
    font: 'Malgun Gothic',
    pos: [0, (- 0.1)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.7, 0.2],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: [1.0, 1.0, 1.0], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '실험이 종료되었습니다.',
    font: 'Malgun Gothic',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var counterbalance;
function counterbalanceRoutineBegin(snapshot) {
  return async function () {
    // create uniform conditions for counterbalance
    let counterbalanceConditions = [];
    for (let n = 0; n < 4; n++) {
        counterbalanceConditions.push({
            'group': n,
            'probability': 1/4,
            'cap': 30
        });
    }
    
    // get counterbalancing group 
    counterbalance = await psychoJS.shelf.counterbalanceSelect({
        key: ['counterbalance', '@designer', '@experiment'],
        groups: counterbalanceConditions.map(row => row.group),
        groupSizes: counterbalanceConditions.map(row => row.cap),
    });
    // if slots and repeats are fully depleted, end the experiment now
    if (counterbalance.finished) {
        quitPsychoJS('No more slots remaining for this study.', true)
    }
    psychoJS.experiment.addData('counterbalance.group', counterbalance.group)
    for (let _key in counterbalance.params) {
        psychoJS.experiment.addData(`counterbalance.${_key}`, counterbalance.params[_key])
    }
    psychoJS.experiment.addData('counterbalance.remaining', counterbalance.remaining)
    return Scheduler.Event.NEXT;
  }
}

function counterbalanceRoutineEachFrame(snapshot) {
    return async function () {
        return Scheduler.Event.NEXT;
    }
}

function counterbalanceRoutineEnd(snapshot) {
    return async function () {
        return Scheduler.Event.NEXT;
    }
}


var t;
var frameN;
var continueRoutine;
var start1Components;
function start1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start1' ---
    t = 0;
    start1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    start1Components = [];
    start1Components.push(text);
    
    for (const thisComponent of start1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function start1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start1' ---
    // get current time
    t = start1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start1' ---
    for (const thisComponent of start1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start2Components;
function start2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start2' ---
    t = 0;
    start2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    start2Components = [];
    start2Components.push(text_3);
    
    for (const thisComponent of start2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start2' ---
    // get current time
    t = start2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start2' ---
    for (const thisComponent of start2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start3Components;
function start3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start3' ---
    t = 0;
    start3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    start3Components = [];
    start3Components.push(text_7);
    
    for (const thisComponent of start3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start3' ---
    // get current time
    t = start3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start3' ---
    for (const thisComponent of start3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var start_expComponents;
function start_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_exp' ---
    t = 0;
    start_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    start_expComponents = [];
    start_expComponents.push(text_4);
    start_expComponents.push(key_resp);
    
    for (const thisComponent of start_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function start_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_exp' ---
    // get current time
    t = start_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of start_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_exp' ---
    for (const thisComponent of start_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "start_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condi/condi1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(aRoutineBegin(snapshot));
      trialsLoopScheduler.add(aRoutineEachFrame());
      trialsLoopScheduler.add(aRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condi/condi2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(bRoutineBegin(snapshot));
      trials_2LoopScheduler.add(bRoutineEachFrame());
      trials_2LoopScheduler.add(bRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condi/condi3.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(cRoutineBegin(snapshot));
      trials_3LoopScheduler.add(cRoutineEachFrame());
      trials_3LoopScheduler.add(cRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var aStartWinParams;
var aComponents;
function aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'a' ---
    t = 0;
    aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    aStartWinParams = {
        'color': psychoJS.window.color,
        'colorSpace': psychoJS.window.colorSpace,
        'backgroundImage': psychoJS.window.backgroundImage,
        'backgroundFit': psychoJS.window.backgroundFit,
    };
    psychoJS.window.color = [(- 1.0), (- 1.0), (- 1.0)];
    psychoJS.window.colorSpace = 'rgb';
    psychoJS.window.backgroundImage = '';
    psychoJS.window.backgroundFit = 'none';
    movie_15.setMovie(path);
    // Run 'Begin Routine' code from session_a_go
    if ((counterbalance.group === "a")) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    aComponents = [];
    aComponents.push(movie_15);
    
    for (const thisComponent of aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function aRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'a' ---
    // get current time
    t = aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_15* updates
    if (t >= 0.0 && movie_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_15.tStart = t;  // (not accounting for frame time here)
      movie_15.frameNStart = frameN;  // exact frame index
      
      movie_15.setAutoDraw(true);
      movie_15.play();
    }
    
    if (movie_15.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function aRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'a' ---
    for (const thisComponent of aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.color = aStartWinParams['color'];
    psychoJS.window.colorSpace = aStartWinParams['colorSpace'];
    psychoJS.window.backgroundImage = aStartWinParams['backgroundImage'];
    psychoJS.window.backgroundFit = aStartWinParams['backgroundFit'];
    movie_15.stop();  // ensure movie has stopped at end of Routine
    // the Routine "a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var bStartWinParams;
var bComponents;
function bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'b' ---
    t = 0;
    bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    bStartWinParams = {
        'color': psychoJS.window.color,
        'colorSpace': psychoJS.window.colorSpace,
        'backgroundImage': psychoJS.window.backgroundImage,
        'backgroundFit': psychoJS.window.backgroundFit,
    };
    psychoJS.window.color = [(- 1.0), (- 1.0), (- 1.0)];
    psychoJS.window.colorSpace = 'rgb';
    psychoJS.window.backgroundImage = '';
    psychoJS.window.backgroundFit = 'none';
    movie_30.setMovie(path);
    // Run 'Begin Routine' code from session_b_go
    if ((counterbalance.group === "b")) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    bComponents = [];
    bComponents.push(movie_30);
    
    for (const thisComponent of bComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'b' ---
    // get current time
    t = bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_30* updates
    if (t >= 0.0 && movie_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_30.tStart = t;  // (not accounting for frame time here)
      movie_30.frameNStart = frameN;  // exact frame index
      
      movie_30.setAutoDraw(true);
      movie_30.play();
    }
    
    if (movie_30.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of bComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'b' ---
    for (const thisComponent of bComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.color = bStartWinParams['color'];
    psychoJS.window.colorSpace = bStartWinParams['colorSpace'];
    psychoJS.window.backgroundImage = bStartWinParams['backgroundImage'];
    psychoJS.window.backgroundFit = bStartWinParams['backgroundFit'];
    movie_30.stop();  // ensure movie has stopped at end of Routine
    // the Routine "b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cStartWinParams;
var cComponents;
function cRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'c' ---
    t = 0;
    cClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    cStartWinParams = {
        'color': psychoJS.window.color,
        'colorSpace': psychoJS.window.colorSpace,
        'backgroundImage': psychoJS.window.backgroundImage,
        'backgroundFit': psychoJS.window.backgroundFit,
    };
    psychoJS.window.color = [(- 1.0), (- 1.0), (- 1.0)];
    psychoJS.window.colorSpace = 'rgb';
    psychoJS.window.backgroundImage = '';
    psychoJS.window.backgroundFit = 'none';
    movie_60.setMovie(path);
    // Run 'Begin Routine' code from session_c_go
    if ((counterbalance.group === "c")) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    cComponents = [];
    cComponents.push(movie_60);
    
    for (const thisComponent of cComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'c' ---
    // get current time
    t = cClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_60* updates
    if (t >= 0.0 && movie_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_60.tStart = t;  // (not accounting for frame time here)
      movie_60.frameNStart = frameN;  // exact frame index
      
      movie_60.setAutoDraw(true);
      movie_60.play();
    }
    
    if (movie_60.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'c' ---
    for (const thisComponent of cComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.color = cStartWinParams['color'];
    psychoJS.window.colorSpace = cStartWinParams['colorSpace'];
    psychoJS.window.backgroundImage = cStartWinParams['backgroundImage'];
    psychoJS.window.backgroundFit = cStartWinParams['backgroundFit'];
    movie_60.stop();  // ensure movie has stopped at end of Routine
    // the Routine "c" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var dStartWinParams;
var dComponents;
function dRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'd' ---
    t = 0;
    dClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    dStartWinParams = {
        'color': psychoJS.window.color,
        'colorSpace': psychoJS.window.colorSpace,
        'backgroundImage': psychoJS.window.backgroundImage,
        'backgroundFit': psychoJS.window.backgroundFit,
    };
    psychoJS.window.color = [(- 1.0), (- 1.0), (- 1.0)];
    psychoJS.window.colorSpace = 'rgb';
    psychoJS.window.backgroundImage = '';
    psychoJS.window.backgroundFit = 'none';
    // Run 'Begin Routine' code from session_d_go
    if ((counterbalance.group === "d")) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    // keep track of which components have finished
    dComponents = [];
    dComponents.push(movie_3);
    
    for (const thisComponent of dComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function dRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'd' ---
    // get current time
    t = dClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_3* updates
    if (t >= 0.0 && movie_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_3.tStart = t;  // (not accounting for frame time here)
      movie_3.frameNStart = frameN;  // exact frame index
      
      movie_3.setAutoDraw(true);
      movie_3.play();
    }
    
    if (movie_3.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of dComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'd' ---
    for (const thisComponent of dComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.color = dStartWinParams['color'];
    psychoJS.window.colorSpace = dStartWinParams['colorSpace'];
    psychoJS.window.backgroundImage = dStartWinParams['backgroundImage'];
    psychoJS.window.backgroundFit = dStartWinParams['backgroundFit'];
    movie_3.stop();  // ensure movie has stopped at end of Routine
    // the Routine "d" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var responseComponents;
function responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response' ---
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('response.started', globalClock.getTime());
    textbox.setText('');
    textbox.refresh();
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(text_5);
    responseComponents.push(textbox);
    responseComponents.push(key_resp_2);
    
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response' ---
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response' ---
    for (const thisComponent of responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('response.stopped', globalClock.getTime());
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var endComponents;
function endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end' ---
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(text_6);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end' ---
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end' ---
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  if (counterbalance && !counterbalance.finished) {
    await psychoJS.shelf.counterbalanceConfirm(
      ['counterbalance', '@designer', '@experiment'],
      counterbalance.participantToken,
      isCompleted
    );
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
