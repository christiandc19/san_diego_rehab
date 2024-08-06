import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const AcuteStressDisorderSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>Symptoms of Acute Stress Disorder</h1>
          <p>People with ASD may experience a variety of symptoms, including:</p>
              <ul>
                <li>Intrusive thoughts: Recurrent, involuntary, and distressing memories of the traumatic event.
                </li>
                <li>Panic Disorder: Involves recurrent and unexpected panic attacks, which are sudden periods of intense fear and discomfort. Symptoms can include heart palpitations, sweating, trembling, shortness of breath, and a feeling of impending doom. Panic attacks can occur without a specific trigger, making them unpredictable and distressing.
                </li>
                <li>Negative mood: Persistent inability to experience positive emotions.
                </li>
                <li>Dissociation: Feeling detached from oneself or the reality of the situation.
                </li>
                <li>Avoidance: Efforts to avoid distressing memories, thoughts, or feelings related to the trauma.
                </li>
                <li>Arousal symptoms: Hypervigilance, irritability, sleep disturbances, and difficulty concentrating.
                </li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <h1>Causes and Risk Factors</h1>
              <p>ASD can result from a wide range of traumatic events, including:</p>
              <ul>
                <li>Natural disasters</li>
                <li>Serious accidents</li>
                <li>Physical or sexual assault</li>
                <li>Military combat</li>
                <li>Witnessing a traumatic event</li>
              </ul>
              <p>Risk factors that may increase the likelihood of developing ASD include a prior history of trauma or mental health issues, lack of social support, and the severity of the traumatic event.</p>

              <h1>Diagnosis and Treatment</h1>
              <p>Diagnosing ASD involves a comprehensive evaluation by a mental health professional, including a detailed discussion of the individual's symptoms and experiences.</p>
              <ul>
                <li>Cognitive Behavioral Therapy (CBT): Aims to change patterns of thinking and behavior associated with the trauma.
                </li>
                <li>Medication: Anti-anxiety medications or antidepressants may be prescribed to help manage symptoms.
                </li>
                <li>Lifestyle Changes: Regular exercise, a healthy diet, adequate sleep, and stress management techniques (such as mindfulness and relaxation exercises) can support overall well-being and reduce anxiety symptoms.
                </li>
                <li>Supportive Counseling: Provides a safe space for individuals to discuss their experiences and feelings.</li>
              </ul>

            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>

              <h1>Coping and Support</h1>
              <p>If you or someone you know is experiencing symptoms of ASD, it's important to seek professional help as soon as possible. Additionally, consider these coping strategies:</p>
              <ul>
                <li>Connect with others: Seek support from friends, family, or support groups.</li>
                <li>Practice self-care: Engage in activities that promote relaxation and well-being, such as exercise, meditation, or hobbies.</li>
                <li>tay informed: Educate yourself about ASD and its treatment options.</li>
              </ul>

          </div>


  </div>

</div>

    </>
  )
}

export default AcuteStressDisorderSection
