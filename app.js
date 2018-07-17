(function raiseThermo() {

        // work out total of donations
        var totalNumOfDonations = document.getElementsByClassName("donation");
            var i;
            var totalSumOfDonations = 0;
            // loop through amount of donations, tally to total sum
            for (i = 0; i < totalNumOfDonations.length; i++){
                totalSumOfDonations += Number(totalNumOfDonations[i].dataset.value);
            }

        // dynamically set the title to the current total amount
        function setCurrentAmount (){
            var currentTotal = document.getElementById('current-total')
            currentTotal.innerText = totalSumOfDonations.toLocaleString("en-US", {style: "currency", currency: "USD", currencyDisplay: "symbol", minimumFractionDigits: 0});
        }
        setCurrentAmount();

        // set variable ready for storing pixel height of combined total
        var calculatedPixelAmount;

        // get the data value from donation goal
        var donationGoal = document.getElementById("donationgoal");
        var donationGoalData = donationGoal.dataset.valuemax;

        // no longer needed - run function after accordion is open to ensure visibility of animation
        // var onAccordionClick = document.getElementById('management-participation');
        // onAccordionClick.onclick = function(){                

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

        /* set timeout to allow css to be drawn, allowing transition to happen now instantly */
        setTimeout(function(){
        calcPercentage();
        }, 1000);
})();
