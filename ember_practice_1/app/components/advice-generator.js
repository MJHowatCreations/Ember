import Component from '@ember/component';

export default Component.extend({
    advice: '',
    
    actions: {
        fetchJson() {
            var newAdvice;
            fetch('https://api.adviceslip.com/advice')
            .then(data => data.json()) // see Response.json() in the Fetch API spec
            .then(
                (result) => {
                    newAdvice = result.slip.advice;
                    console.log(result.slip.advice);
                    this.set('advice', newAdvice); 
                });
            
        }

    },



    


});
