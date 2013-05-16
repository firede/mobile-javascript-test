describe( 'String', function() {

    describe( 'browser support check (is a function)', function() {
        var ProtoFunc = [
            'toString',
            'toLocaleString',
            'valueOf',
            'charAt',
            'charCodeAt',
            'concat',
            'indexOf',
            'lastIndexOf',
            'localeCompare',
            'match',
            'replace',
            'search',
            'slice',
            'split',
            'substring',
            'toLowerCase',
            'toLocaleLowerCase',
            'toUpperCase',
            'toLocaleUpperCase'
        ];

        _( ProtoFunc ).each( function( key ) {
            it( 'String.prototype.' + key + '()', function() {
                expect( String.prototype[ key ] ).to.be.a( 'function' );
            });
        });

        it( 'String.fromCharCode()', function() {
            expect( String.fromCharCode ).to.be.a( 'function' );
        });
    });

});
