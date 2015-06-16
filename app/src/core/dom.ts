/* dom examples

div(
    div(
        div( 'some text' )
    )
)



div(
    div(
        attr( 'class', 'far'  ),
        h1( 'A title' ),
        text( 'A body' ),
        hr()
    )
)


div(
    div(
        attr( 'class', 'far',  ).
        h1( 'A title' ).
        text( 'A body' ).
        hr()
    )
)

var tableRow = (data)=>{
    return (host)=>{
        _(data).map((data)=>{
            bind(
                host,
                tr(
                    attr(
                        'height', 50,
                        'class', 'rob'
                    ),
                    td(text(data.a)),
                    td(text(data.b)),
                    td(text(data.c)),
                    td(text(data.d))
                )
            )
        }
    }
};

var container = div(
    div(
        table(
            thead(
                tr(
                    th('A'),
                    th('B'),
                    th('C'),
                    th('D')
                )
            ),
            tbody(
                tablerow(dataSetOne),
                tablerow(dataSetTwo),
                tablerow(dataSetThree)
            )
        )
    )
);

*/

(function(){
    'use strict';

    feature( 'core' )
    .dom = function(){
        var document = feature( 'libraries.document' );
        var _ = feature( 'libraries.lodash' );
        var elements = [];

        var _public = {
            div: (...children) => {
                return _public.createElement('div', children);
            },
            attr: (...attributes) => {
                return (parent) => {
                    for( var i = 0; i < attributes.length; i += 2 ){
                        parent.attr(attributes[i], attributes[i+1]);
                    }
                };
            },
            text: (text) => {
                return (parent) => {
                    var newElement =  document.createTextNode( text );
                    if(parent){ return parent.appendChild( newElement ); }
                    // otherwise return the new element without any wrapping
                    else{ return newElement; }
                };
            },
            createElement: (elementName, children ) => {
                return (parent) => {
                    // create a new dom element based on the element name passed in
                    var newElement =  document.createElement( elementName );

                    // now call all the children of the element and pass in
                    // the element to used as the child's parent
                    _(children).map((child)=>{ child(newElement)});

                    // if this element was passed a parent then
                    // attach the new element to it
                    if(parent){ return parent.appendChild( newElement ); }

                    // otherwise return the new element without any wrapping
                    else{ return newElement; }
                };
            }
        };

        return _public;
    };
}());
