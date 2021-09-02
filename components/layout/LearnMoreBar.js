import React from 'react'
import Link from 'next/link';

function LearnMoreBar({label, link}) {
    return (
        <div className="text-center learn-more"><Link href={link}>{label}</Link></div>
    )
}

export default LearnMoreBar
