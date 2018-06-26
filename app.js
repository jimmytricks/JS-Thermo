(function raiseThermo() {

    
    // work out total of donations
    var totalNumOfDonations = document.getElementsByClassName("donation");
        var i;
        var totalSumOfDonations = 0;
        // loop through amount of donations, tally to total sum
        for (i = 0; i < totalNumOfDonations.length; i++){
            // debugger;
            totalSumOfDonations += Number(totalNumOfDonations[i].dataset.value);
        }

    // dynamically set the title to the current total amount
    function setCurrentAmount (){
        var currentTotal = document.getElementById('current-total')
        currentTotal.innerText = '$' + totalSumOfDonations;
    }
    setCurrentAmount();

    // set variable ready for storing pixel height of combined total
    var calculatedPixelAmount;

    // get the data value from donation goal
    var donationGoal = document.getElementById("donationgoal");
    var donationGoalData = donationGoal.dataset.valuemax;

    // work out how much the therm should rise
    function calcPercentage() {
        // calc the pixel amount then times it by 500px (size of thermo)
        calculatedPixelAmount = (totalSumOfDonations / donationGoalData) * 1000;
        // round to integer
        var roundedCalculatedPixelAmount = Math.round(calculatedPixelAmount);         
        // make string, add px
        var stringPixelAmount = roundedCalculatedPixelAmount.toString();
        stringPixelAmount += 'px';
        // set height of the thermo to combined amount
        document.getElementById("thermo").style.height = stringPixelAmount;
    }

    calcPercentage();


})();