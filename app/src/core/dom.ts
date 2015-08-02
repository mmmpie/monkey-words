/* dom examples

div(
    div(
        div(
            text( 'some text' )
        )
    )
)



div(
    div(
        attr( 'class', 'far'  ),
        h1( text( 'A title' )),
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

var container = div([
    eventSink( 'click', onClick ),
    div([
        table([
            columns(names),
            data(statisticsA),
            data(statisticsB),
            data(statisticsC)
        ])
    ])
]);

*/

(function(){
    'use strict';

    feature( 'core' )
    .dom = function(){
        var document = feature().libraries.document;
        var $ = feature().libraries.jquery;
        var _ = feature().libraries.lodash;
        var elements = [];

        var _public = {
            get: $,
            eventTap: (...eventHandlers) => {
                return (parent) => {
                    for( var i = 0; i < eventHandlers.length; i += 2 ){
                        parent.addEventListener(eventHandlers[i], eventHandlers[i+1]);
                    }
                };
            },
            eventSink: (...eventHandlers) => {
                return (parent) => {
                    for( var i = 0; i < eventHandlers.length; i += 2 ){
                        parent.addEventListener(eventHandlers[i],
                            (event) => {
                                eventHandlers[i+1]();
                                event.stopPropagation();
                            }
                        );
                    }
                };
            },
            div: _.curry(_public.createElement)('div'),
            h1: _.curry(_public.createElement)('h1')
            button: _.curry(_public.createElement)('button'),
            td: _.curry(_public.createElement)('td'),
            tr: _.curry(_public.createElement)('tr'),
            table: _.curry(_public.createElement)('table'),
            attr: (attributes, parent]) => {
                _(attributes).chunk(2).object();

                for( var i = 0; i < attributes.length; i += 2 ){
                    parent.setAttribute(attributes[i], attributes[i+1]);
                }
            },
            text: (text, parent) => {
                var newElement =  document.createTextNode( text );
                if(parent){ return parent.appendChild( newElement ); }
                // otherwise return the new element without any wrapping
                else{ return newElement; }
            },
            createElement: (elementName, children, parent ) => {
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
            },
            render: ( views ) => {
                var partialViews = _(views).map( 'render', _public );
                return (parent) => {
                    _(partialViews).map((view)=>{view(parent)});
                }
            }
        };

        return _public;
    };
}());
