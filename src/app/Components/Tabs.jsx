import React, { useContext } from 'react'
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import SkillsTab from './SkillsTab';
import { TabsContext } from '../Context/TabsContext';
import { AnimatePresence } from 'motion/react';
const tabs=[<ExperienceTab/>,<EducationTab/>,<SkillsTab/>]
export default function Tabs() {
    const {activeTab} = useContext(TabsContext);
    return (
        <AnimatePresence mode="wait">   
                <div key={activeTab}>
                    {tabs[activeTab]}
                </div>
        </AnimatePresence>
    )
}
