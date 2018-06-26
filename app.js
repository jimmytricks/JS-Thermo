(function raiseThermo() {


    // set variable ready for storing pixel height of combined total
    var calculatedPixelAmount;

    // get the data value from donation goal
    var donationGoal = document.getElementById("donationgoal");
    var donationGoalData = donationGoal.dataset.value;
    console.log(donationGoalData);

    // get the data value from combined total
    var highestCurrentValue = document.getElementById("highest-amount")
    var highestCurrentValueData = highestCurrentValue.dataset.value;
    console.log(highestCurrentValueData);

    // work out how much the therm should rise
    function calcPercentage(donationGoalData, highestCurrentValueData) {

        // calc the pixel amount then times it by 500px (size of thermo)
        calculatedPixelAmount = (highestCurrentValueData / donationGoalData) * 500;

        // round to integer
        var roundedCalculatedPixelAmount = Math.round(calculatedPixelAmount); 
        
        // make string, add px
        var stringPixelAmount = roundedCalculatedPixelAmount.toString();
        stringPixelAmount += 'px';
        console.log(stringPixelAmount);
        // set height of the thermo to combined amount
        document.getElementById("thermo").style.height = stringPixelAmount;
    }

    calcPercentage(donationGoalData, highestCurrentValueData);


})();