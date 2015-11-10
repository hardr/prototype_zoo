var assert = require('assert');

var Animal = require('../javascript/animal.js');

describe('Animal', function(){

  describe('properties', function(){

    animal = new Animal('lion', 'roar', 'Simba', 3);
    
    describe('kind', function(){
      it('should have a kind', function(){
        assert.equal(animal.kind, "lion");
      });
    });

    describe('sound', function(){
      it('should have a sound', function(){
        assert.equal(animal.sound, "roar");
      });
    });

    describe('name', function(){
      it('should have a name', function(){
        assert.equal(animal.name, "Simba");
      });
    });

    describe('age', function(){
      it('should have an age', function(){
        assert.equal(animal.age, 3);
      });
    });

    describe('awake', function(){
      it('should have a default value for awake', function(){
        assert.equal(animal.awake, false);
      });   
    });

  }); // properties

  describe('methods', function(){

    beforeEach(function() {
      var lion = new Animal('lion', 'roar', 'Simba', 3);
      var pig  = new Animal('pig', 'oink', 'Porky', 2);
    });

    afterEach(function() {
      lion = null;
      pig  = null;
    });

    describe('#wakeUp()', function(){
      it('should change state to awake', function(){
        lion.wakeUp();
        pig.wakeUp();

        assert.equal(lion.awake, true);
        assert.equal(pig.awake, true);
      });
    });

    describe('#speak()', function(){
      it('should roar if a lion', function(){
        assert.equal(lion.speak(), 'roar');
      });
      
      it('should oink if a pig', function(){
        assert.equal(pig.speak(), 'oink');
      });
    });
    
    describe('#feed()', function(){
      it('should return "NOM NOM NOM" if awake', function(){
        pig.wakeUp();

        assert.equal(lion.feed(), undefined);
        assert.equal(pig.feed(), 'Nom Nom Nom');
      });
    });

    describe('#growUp()', function(){
      it('should increment age by one', function(){
        assert.equal(lion.growUp(), 4);
        assert.equal(pig.growUp(), 3);
      });
    });

    describe('#sleep()', function(){
      it('should change state of awake to false', function(){
        lion.sleep();
        pig.sleep();

        assert.equal(lion.awake, false);
        assert.equal(pig.awake, false);
      });
    });

  }); // methods

});
