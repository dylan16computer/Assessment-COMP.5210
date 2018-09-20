// function PresetValues()
// {
//     var volume = [5000, 5500, 6300, 9000, 6000, 5000];
//     var sharePrice = [0.55, 0.58, 0.6, 0.63, 0.65, 0.7];
//     var totalCost = 0;
//     var totalVolume = 0;
//     var movAvg = 0;
//     for(j = 0; j < volume.length; j++)
//     {
//         var transCost = volume[j] * sharePrice[j];
//         totalCost += transCost;
//         totalVolume += volume[j];
//         movAvg = totalCost / totalVolume;
//         var profLoss = 100 - (100 * (movAvg / sharePrice[j]));
//         document.getElementById(`row${j+2}col1`).innerHTML = volume[j];
//         document.getElementById(`row${j+2}col2`).innerHTML = sharePrice[j];
//         document.getElementById(`row${j+2}col3`).innerHTML = `$${transCost}`;
//         document.getElementById(`row${j+2}col4`).innerHTML = `$${totalCost}`;
//         document.getElementById(`row${j+2}col5`).innerHTML = totalVolume;
//         document.getElementById(`row${j+2}col6`).innerHTML = movAvg.toFixed(4);
//         document.getElementById(`row${j+2}col7`).innerHTML = profLoss.toFixed(4);
//     }
//     document.getElementById(`row2col6`).innerHTML = "";
//     document.getElementById(`row2col7`).innerHTML = "";
// }

function Calc()
{
    var volume = [];
    var sharePrice = [];
    var totalCost = 0;
    var totalVolume = 0;
    for(let t = 0; t < 6; t++)
    {
        volume[t] = document.getElementById(`vol${t+1}`).value;
        sharePrice[t] = document.getElementById(`pri${t+1}`).value;
        var transCost = volume[t] * sharePrice[t];
        totalCost += transCost;
        totalVolume += volume[t];
        movAvg = totalCost / totalVolume;
        var profLoss = 100 - (100 * (movAvg / sharePrice[t]));
        document.getElementById(`row${t+2}col3`).innerHTML = `$${transCost}`;
        document.getElementById(`row${t+2}col4`).innerHTML = `$${totalCost}`;
        document.getElementById(`row${t+2}col5`).innerHTML = totalVolume;
        document.getElementById(`row${t+2}col6`).innerHTML = movAvg.toFixed(4);
        document.getElementById(`row${t+2}col7`).innerHTML = profLoss.toFixed(4);
    } 
}

function ClearTable()
{
    for(q = 1; q < 7; q++)
    {
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`vol${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
        document.getElementById(`pri${q}`).innerHTML = "";
    }
}