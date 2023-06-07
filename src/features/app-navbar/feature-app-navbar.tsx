import React, { useState, FC } from 'react'
import { SearchIcon } from '@/icons/search-icon'
import { FilterIcon } from '@/icons/filter-icon'
import { CalendarIcon } from '@/icons/calendar-icon'
import { BackIcon } from '@/icons/back-icon'
import UINavbar from '@/ui/navbar/ui-navbar'

type FeatureAppNavbarProps = {
  initialTitle?: string
}

const FeatureAppNavbar: FC<FeatureAppNavbarProps> = ({ initialTitle = '' }) => {
  const [isSearchIcon, setIsSearchIcon] = useState(true)
  const [title, setTitle] = useState(initialTitle)
  const [showIcon, setShowIcon] = useState(false)
  const [isFilterIcon, setIsFilterIcon] = useState(true)

  const toggleLeftIcon = () => setIsSearchIcon(!isSearchIcon)
  const toggleRightIcon = () => setIsFilterIcon(!isFilterIcon)
  const updateTitle = (newTitle: string) => setTitle(newTitle)
  const toggleCenterIcon = () => setShowIcon(!showIcon)

  return (
    <UINavbar
      leftIcon={isSearchIcon ? <SearchIcon /> : <BackIcon />}
      rightIcon={isFilterIcon ? <FilterIcon /> : <CalendarIcon />}
      centerContent={<>{title}</>}
    />
  )
}

export default FeatureAppNavbar
