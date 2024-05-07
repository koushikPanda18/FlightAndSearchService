
function checkValidTime(timestring1,timestring2)
{
    departureTime=new Date(timestring1);
    arrivalTime=new Date(timestring2);
    return departureTime<arrivalTime;
}
function checkValidPriceRange(minPrice,maxPrice)
{
    if(!minPrice || !maxPrice || minPrice<maxPrice) return true;
    else return false;

}
module.exports={
    checkValidTime,
    checkValidPriceRange,
}