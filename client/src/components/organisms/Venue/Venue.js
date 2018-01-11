import { Flex, Heading, Icon, Text } from 'components/atoms'

import PropTypes from 'prop-types'
import React from 'react'
import classes from './Venue.scss'

const Venue = () => (
	<section className={classes.container} id="venue">
		<div className={classes.whiteBox} />

		<Flex justify="space-between" width="100%">
			<Heading bottomBorder level={2}>
				Venue
			</Heading>

			<Flex direction="column">
				<Heading className={`f4`} color="white">
					Liferay Headquarters
				</Heading>
				<Text color="white">1400 Montefino Ave</Text>
				<Text color="white">Diamond Bar, CA 91765</Text>
				<Text color="white">Jan 22 – 26</Text>
				<a href="https://www.google.com/maps/dir//1400+Montefino+Ave,+Diamond+Bar,+CA+91765/@33.9976775,-117.8166972,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c32c919220bdf5:0x178fae061af36379!2m2!1d-117.8145085!2d33.9976731">
					{' '}
					directions{' '}
				</a>
			</Flex>

			<div className={classes.image1} />

			<div className={classes.image2} />
		</Flex>
	</section>
)

Venue.propTypes = {
	label: PropTypes.string,
	primaryHeader: PropTypes.string,
	secondaryHeader: PropTypes.string,
	tertiaryHeader: PropTypes.string,
}

export default Venue
