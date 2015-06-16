/// <reference path="../features.ts"/>
(function () {
    'use strict';
    feature('stateMachine').main = function () {
        var _public = feature().stateMachine();
        _public.addTransition('start', ['intro', 'highscores', 'demo', 'game', 'credits']);
        _public.addTransition('intro', ['highscores', 'demo', 'game', 'credits']);
        _public.addTransition('highscores', ['start']);
        _public.addTransition('demo', ['start']);
        _public.addTransition('game', ['highscores']);
        _public.addTransition('credits', ['start']);
        _public.setInitialState('start');
        _public.setTerminalState('intro');
        return _public;
    };
})();
