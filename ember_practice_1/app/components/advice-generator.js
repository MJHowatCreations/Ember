import Component from '@ember/component';

export default Component.extend({

    fetchAdvice(){
        fetch('https://api.adviceslip.com/advice')
        .then(data => data.json()) // see Response.json() in the Fetch API spec
        .then(
            (result) => {
                result = slip.advice
                // console.log(result);
                this.setState({
                    isLoaded: true,
                    json: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        );
   }

     
});
