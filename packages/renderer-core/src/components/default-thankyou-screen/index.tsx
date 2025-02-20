/**
 * WordPress Dependencies
 */
import { useEffect, useState } from 'react';

/**
 * External Depdnencies
 */
import classnames from 'classnames';
import { css } from 'emotion';

/**
 * Internal Dependencies
 */
import { useBlockTheme, useMessages } from '../../hooks';
import { HTMLParser } from '..';

const DefaultThankYouScreen: React.FC = () => {
	const theme = useBlockTheme( undefined );
	const [ isActive, setIsActive ] = useState( false );
	const messages = useMessages();
	useEffect( () => {
		setIsActive( true );
	}, [] );
	return (
		<div
			className={ classnames(
				'renderer-components-default-thankyou-screen',
				{
					active: isActive,
				},
				css`
					color: ${ theme.questionsColor };
					font-family: ${ theme.questionsLabelFont };
				`
			) }
		>
			<div className="qf-thankyou-screen-block__content-wrapper">
				<HTMLParser
					value={ messages[ 'block.defaultThankYouScreen.label' ] }
				/>
			</div>
		</div>
	);
};

export default DefaultThankYouScreen;
