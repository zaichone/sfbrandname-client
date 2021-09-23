import React from 'react'
import Link from 'next/link';

function LearnMoreBar({label, link, classes}) {
    return (
        <div className={`"text-center learn-more ${classes}"`}><Link href={link}>{label}</Link></div>
    )
}

export default LearnMoreBar
