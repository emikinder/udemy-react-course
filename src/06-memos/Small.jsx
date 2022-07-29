// import { memo } from 'react'; <-- no es TAN comun

//React.memo solo funciona con CRA importando react:
import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Me volví a generar');

	return <small>{value}</small>;
});
