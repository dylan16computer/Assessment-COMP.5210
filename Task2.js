function calc()
{
    var volume = [5000, 5500, 6300, 9000, 6000, 5000];
    var sharePrice = [0.55, 0.58, 0.6, 0.63, 0.65, 0.7];
    for(i = 0; i < volume.length; i++)
    {
        var transCost = Number(volume[i] * sharePrice[i]);
        document.getElementById(`row${i+2}col3`).innerHTML = "$" + transCost;
    }

    var totalCost;
    var totalVolHeld;
    var movAvg;
    var profLos;

    //var userInput = document.getElementById("userInputField").value;
}