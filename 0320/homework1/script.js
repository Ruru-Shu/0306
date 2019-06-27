function getValueById(id)
{
	return document.getElementById(id).value;
}
function add()
{
	document.getElementById('ans').value = parseFloat(getValueById('n1')) + parseFloat(getValueById('n2'));
}
function sub()
{
	document.getElementById('ans').value = parseFloat(getValueById('n1')) - parseFloat(getValueById('n2'));
}
function times()
{
	document.getElementById('ans').value = parseFloat(getValueById('n1')) * parseFloat(getValueById('n2'));
}
function div()
{
	document.getElementById('ans').value = parseFloat(getValueById('n1')) / parseFloat(getValueById('n2'));
}