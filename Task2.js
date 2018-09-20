function Calc()
{
    var volume = [];
    var sharePrice = [];
    var totalCost = 0;
    var totalVolume = 0;
    for(let i = 0; i < 6; i++)
    {
        volume[i] = Number(document.getElementById(`vol${i+1}`).value);
        sharePrice[i] = document.getElementById(`pri${i+1}`).value;
        var transCost = volume[i] * sharePrice[i];
        totalCost += transCost;
        totalVolume = Number(totalVolume + volume[i]);
        movAvg = totalCost / totalVolume;
        var profLoss = 100 - (100 * (movAvg / sharePrice[i]));
        document.getElementById(`row${i+2}col3`).innerHTML = `$${transCost}`;
        document.getElementById(`row${i+2}col4`).innerHTML = `$${totalCost}`;
        document.getElementById(`row${i+2}col5`).innerHTML = totalVolume;
        document.getElementById(`row${i+2}col6`).innerHTML = movAvg.toFixed(4);
        document.getElementById(`row${i+2}col7`).innerHTML = profLoss.toFixed(4);
    }
    document.getElementById(`row2col6`).innerHTML = "";
    document.getElementById(`row2col7`).innerHTML = "";
}

function ClearTable()
{
    for(let i = 2; i < 8; i++)
    {
        document.getElementById(`row${i}col3`).innerHTML = "";
        document.getElementById(`row${i}col4`).innerHTML = "";
        document.getElementById(`row${i}col5`).innerHTML = "";
        document.getElementById(`row${i}col6`).innerHTML = "";
        document.getElementById(`row${i}col7`).innerHTML = "";
    }
}