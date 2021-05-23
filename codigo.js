class billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}
var caja = []
caja.push(new billete(50,3));
caja.push(new billete(20,2));
caja.push(new billete(10,2));

var entregados = [];

var dinero = 210;
var div;
var papeles;

var r = document.getElementById("respuesta");
var b = document.getElementById("botoncito");
b.addEventListener("click", entregarDinero)


function entregarDinero()
{
    var d = document.getElementById("cantidad");
    dinero = parseInt(d.value);
    
    for (var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor)
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad
            }
            else
            {
                papeles = div
            }
            entregados.push(new billete(bi.valor, papeles))
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0)
    {
        r.innerHTML = "no poseo suficiente dinero"
    }
    else
    {
        for (var e of entregados)
        {
            r.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<br />"
        }
    }
}
