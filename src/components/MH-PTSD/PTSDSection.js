import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const PTSDSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>Symptoms of PTSD</h1>
          <p>PTSD symptoms can vary widely and may include:</p>
              <ul>
                <li>Intrusive Memories: Unwanted, distressing memories of the traumatic event, flashbacks, or nightmares.
                </li>
                <li>Avoidance: Avoiding places, people, or activities that remind you of the trauma.
                </li>
                <li>Negative Changes in Thinking and Mood: Feelings of hopelessness, emotional numbness, memory problems, and difficulty maintaining close relationships.
                </li>
                <li>Changes in Physical and Emotional Reactions: Being easily startled, feeling tense, having trouble sleeping, or experiencing angry outbursts.
                </li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <h1>Causes and Risk Factors</h1>
              <p>While not everyone who experiences trauma will develop PTSD, certain factors may increase the risk:</p>
              <ul>
                <li>Severity of the Trauma: The more intense the trauma, the higher the risk.</li>
                <li>Personal History: A history of mental health issues or previous trauma can increase susceptibility.</li>
                <li>Support System: Lack of a strong support system can make it harder to cope with trauma.</li>
                <li>Biological Factors: Genetics and brain chemistry may also play a role.</li>
              </ul>

              <h1>Treatment Options</h1>
              <p>PTSD is treatable, and many people find relief through a combination of therapies:</p>
              <ul>
                <li>Cognitive Behavioral Therapy (CBT): Helps patients change negative thought patterns.
                </li>
                <li>Exposure Therapy: Gradually exposes patients to trauma-related memories in a safe environment.
                </li>
                <li>Eye Movement Desensitization and Reprocessing (EMDR): Uses guided eye movements to help process traumatic memories.
                </li>
                <li>Medications: Antidepressants and anti-anxiety medications can help manage symptoms.</li>
                <li>Support Groups: Sharing experiences with others who understand can provide comfort and healing.</li>
              </ul>

            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>

              <h1>Seeking Help</h1>
              <p>If you or a loved one are struggling with PTSD, it’s important to seek professional help. PTSD is not a sign of weakness, and treatment can significantly improve quality of life. Reach out to a mental health professional to discuss the best options for you.</p>


          </div>


  </div>

</div>

    </>
  )
}

export default PTSDSection
