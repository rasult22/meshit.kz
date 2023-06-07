import React, { useState, FC } from 'react'
import { SearchIcon } from '@/icons/search-icon'
import { FilterIcon } from '@/icons/filter-icon'
import { CalendarIcon } from '@/icons/calendar-icon'
import { BackIcon } from '@/icons/back-icon'
import UINavbar from '@/ui/navbar/ui-navbar'

type FeatureAppNavbarProps = {
  center: React.ReactNode
  right: React.ReactNode
  left: React.ReactNode
}

/* TODO: 
  1. Develop configurable states
  2. Add event emitters to clicking on slots
*/

const FeatureAppNavbar: FC<FeatureAppNavbarProps> = ({
  right,
  left,
  center
}) => {
  return <UINavbar leftIcon={left} rightIcon={right} centerContent={center} />
}

export default FeatureAppNavbar
