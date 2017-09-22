import Vue from 'vue'
import mutations from 'src/vuex/mutations'
import * as types from 'src/vuex/mutation_types'

describe('mutations', () => {
    var state;

    // 테스트 케이스는 실행 전에 적절한 테스트 환경을 구성할 필요가 있을때.
    beforeEach( () => {
        state = {}
        // 소음 플러그인을 모킹해서 해당 메소드 호출을 감시한다.
        Vue.noise = {
            start: _=>{},
            stop: _=>{},
            pause: _=>{}
        }
        sinon.spy(Vue.noise, 'start');
        sinon.spy(Vue.noise, 'pause');
        sinon.spy(Vue.noise, 'stop');
    });

    afterEach( ()=> {
        Vue.noise.start.restore();
        Vue.noise.pause.restore();
        Vue.noise.stop.restore();
    });

    describe('START', () => {
        console.log('START');

        it('should set all the state properties correctly after start', () => {

            // start 메소드를 호출하기 전에 모든 속성등이 undefined 인지 확인한다.
            expect(state.started).to.be.undefined;
            expect(state.stopped).to.be.undefined;
            expect(state.paused).to.be.undefined;
            expect(state.interval).to.be.undefined;

            mutations[types.START](state);
            
            expect(state.started).to.be.true;
            expect(state.stopped).to.be.false;
            expect(state.paused).to.be.false;
            expect(state.interval).not.to.be.undefined;            

        });

        if('should call Vue.noise.start method if both state.isWorking and state.soundEnabled are true', () => {
            state.isWorking = true;
            state.soundEnabled = true;
            mutations[types.START](state);
            expect(Vue.noise.statr).to.have.been.called;
        });

        it('should not call Vue.noise.start method if state.isWorking is not true', () => {
            state.isWorking = false;
            state.soundEnabled = true;
            mutations[types.START](state);
            expect(Vue.noise.start).to.not.have.been.called;
        });

        it('should not call Vue.noise.start method if state.soundEnabled is not true', () => {
            state.isWorking = true;
            state.soundEnabled = false;
            mutations[types.START](state);
            expect(Vue.noise.start).to.not.have.been.called;
        });

    });


});