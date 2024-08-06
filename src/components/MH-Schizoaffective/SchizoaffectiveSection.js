import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const SchizoaffectiveSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>Symptoms of Schizoaffective Disorder</h1>
          <p>Individuals with Schizoaffective Disorder may experience a combination of symptoms from both schizophrenia and mood disorders. Common symptoms include:</p>
              <ul>
                <li>Hallucinations: Hearing or seeing things that are not present.</li>
                <li>Delusions: Strongly held false beliefs that are not based in reality.</li>
                <li>Disorganized Thinking: Trouble organizing thoughts, leading to unclear or incoherent speech.</li>
                <li>Manic Episodes: Periods of extremely high energy, euphoria, or irritability.</li>
                <li>Depressive Episodes: Periods of intense sadness, hopelessness, or lack of interest in daily activities.</li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <h1>Causes and Risk Factors</h1>
              <p>The exact cause of Schizoaffective Disorder is unknown, but it is believed to be a combination of genetic, biochemical, and environmental factors. Risk factors include:</p>
              <ul>
                <li>Family History: A higher likelihood of developing the disorder if a close relative has schizophrenia, bipolar disorder, or schizoaffective disorder.</li>
                <li>Brain Chemistry and Structure: Imbalances in neurotransmitters and differences in brain structure may contribute to the disorder.</li>
                <li>Stressful Life Events: Traumatic experiences or high levels of stress can trigger symptoms in predisposed individuals.</li>
              </ul>

              <h1>Diagnosis and Treatment</h1>
              <p>Diagnosing Schizoaffective Disorder can be challenging due to its overlapping symptoms with other mental health conditions. A comprehensive evaluation by a mental health professional typically includes:</p>
              <ul>
                <li>Clinical Assessment: Detailed interviews about the individual's symptoms, medical history, and family history.</li>
                <li>Psychiatric Evaluation: Assessment of mental status, mood, and behavior.</li>
                <li>Laboratory Tests: To rule out other medical conditions that might be causing symptoms.</li>
              </ul>

            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>

              <h1>Treatment Options</h1>
              <p>Effective management of Schizoaffective Disorder usually involves a combination of treatments, including:</p>

              <ul>
                <li>Medications: Antipsychotics, mood stabilizers, and antidepressants to manage symptoms.</li>
                <li>Psychotherapy: Cognitive-behavioral therapy (CBT) and supportive therapy to help individuals understand and cope with their condition.</li>
                <li>Lifestyle Changes: Regular exercise, a healthy diet, and adequate sleep can improve overall well-being.</li>
                <li>Support Systems: Family therapy, support groups, and community resources can provide essential support and reduce isolation.</li>
              </ul>


          </div>


  </div>

</div>

    </>
  )
}

export default SchizoaffectiveSection
