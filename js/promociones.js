//Objeto promoción
class Promocion {
    constructor(nombrePromo, precioPromo) {
        this.nombre = nombrePromo;
        this.precio = precioPromo;
    }
}

//Usamos READY para detectar que el DOM está listo para usarse
$(document).ready(function () {
    console.log("El DOM está listo");

    //AL SELECCIONAR BOTÓN PROMO 1
    $('#btnPromo1').on('click', fMedioPago1);
    const promo1 = new Promocion("PROMO 1", 1700);

    //MOSTRAR MEDIOS DE PAGO.
    function fMedioPago1() {
        $('#btnPromo1').hide();
        $('#btnPromo2').hide();
        $('#contPrecioTC').hide();
        $('#resultadoFinal').hide();
        $('#contMedioPago').show();
        //Cuando se selecciona Medio de pago: 
        $('#seleccionar1').on('click', mostrarPrecio1)
    }

    //ELEGIR MEDIO DE PAGO: 
    function mostrarPrecio1() {
        //MERCADOPAGO, MUESTRA PRECIO FINAL CON DESCUENTO
        if ($("#medioPago").val() == "MP") {
            $('#contMedioPago').hide();
            $('#contPrecioMP').show();
            precioMP1();
            //TARJETA MUESTRA PRECIO CON RECARGO Y OFRECE CUOTAS
        } else if ($("#medioPago").val() == "TC") {
            $('#contMedioPago').hide();
            $('#contPrecioTC').show();
            precioTC1();
        } else {
            return;
        }
    }

    //Función para calcular precio por MercadoPago y mostrar:
    function precioMP1() {
        let precio1MercadoPago = promo1.precio - promo1.precio * 0.10;
        $("#precioFinal").append(`<p> $${precio1MercadoPago} </p>`);
        $('#resultadoFinal').show();
    }

    //CALCULAR PRECIO POR TARJETAS.
    function precioTC1() {
        let precio1TC = promo1.precio * 1.05;
        $("#precioTC").append(`<p> $${precio1TC} </p>`);
        //Cuando se selecciona cantidad de cuotas: 
        $('#seleccionar2').on('click', precioCuotas)

        function precioCuotas() {
            //PRECIO EN 3 CUOTAS Y MENSAJE FINAL
            if ($("#cantCuotas").val() == "3") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio1TC = promo1.precio * 1.05;
                let precio1cuota3 = precio1TC / 3;

                $("#precioFinal").append(`<p> 3 cuotas de $${precio1cuota3}. </p>`);

                //PRECIO EN 6 CUOTAS Y MENSAJE FINAL
            } else if ($('#cantCuotas').val() == "6") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio1TC = promo1.precio * 1.05;
                let precio1cuota6 = precio1TC / 6;

                $("#precioFinal").append(`<p> 6 cuotas de $${precio1cuota6}. </p>`);

                //PRECIO EN 9 CUOTAS Y MENSAJE FINAL
            } else if ($('#cantCuotas').val() == "9") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio1TC = promo1.precio * 1.05;
                let precio1cuota9 = precio1TC / 9;

                $("#precioFinal").append(`<p> 9 cuotas de $${precio1cuota9}. </p>`);
                return
            }
        }
    }

    
    //AL SELECCIONAR BOTÓN PROMO 2
    $('#btnPromo2').on('click', fMedioPago2);
    const promo2 = new Promocion("PROMO 2", 2500);

    //MOSTRAR MEDIOS DE PAGO.
    function fMedioPago2() {
        $('#btnPromo1').hide();
        $('#btnPromo2').hide();
        $('#contPrecioTC').hide();
        $('#resultadoFinal').hide();
        $('#contMedioPago').show();
        //Cuando se selecciona Medio de pago: 
        $('#seleccionar1').on('click', mostrarPrecio2)
    }

    //ELEGIR MEDIO DE PAGO: 
    function mostrarPrecio2() {
        //MERCADOPAGO, MUESTRA PRECIO FINAL CON DESCUENTO
        if ($("#medioPago").val() == "MP") {
            $('#contMedioPago').hide();
            $('#contPrecioMP').show();
            precioMP2();
            //TARJETA MUESTRA PRECIO CON RECARGO Y OFRECE CUOTAS
        } else if ($("#medioPago").val() == "TC") {
            $('#contMedioPago').hide();
            $('#contPrecioTC').show();
            precioTC2();
        } else {
            return;
        }
    }

    //Función para calcular precio por MercadoPago y mostrar:
    function precioMP2() {
        let precio2MercadoPago = promo2.precio - promo2.precio * 0.10;
        $("#precioFinal").append(`<p> $${precio2MercadoPago} </p>`);
        $('#resultadoFinal').show();
    }

    //CALCULAR PRECIO POR TARJETAS.
    function precioTC2() {
        let precio2TC = promo2.precio * 1.05;
        $("#precioTC").append(`<p> $${precio2TC} </p>`);
        //Cuando se selecciona cantidad de cuotas: 
        $('#seleccionar2').on('click', precioCuotas)

        function precioCuotas() {
            //PRECIO EN 3 CUOTAS Y MENSAJE FINAL
            if ($("#cantCuotas").val() == "3") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio2TC = promo2.precio * 1.05;
                let precio2cuota3 = precio2TC / 3;

                $("#precioFinal").append(`<p> 3 cuotas de $${precio2cuota3}. </p>`);

                //PRECIO EN 6 CUOTAS Y MENSAJE FINAL
            } else if ($('#cantCuotas').val() == "6") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio2TC = promo2.precio * 1.05;
                let precio2cuota6 = precio2TC / 6;

                $("#precioFinal").append(`<p> 6 cuotas de $${precio2cuota6}. </p>`);

                //PRECIO EN 9 CUOTAS Y MENSAJE FINAL
            } else if ($('#cantCuotas').val() == "9") {
                $('#contPrecioTC').hide();
                $('#resultadoFinal').show();

                let precio2TC = promo2.precio * 1.05;
                let precio2cuota9 = precio2TC / 9;

                $("#precioFinal").append(`<p> 9 cuotas de $${precio2cuota9}. </p>`);
                return
            }
        }
    }
    //Cierra READY
});

