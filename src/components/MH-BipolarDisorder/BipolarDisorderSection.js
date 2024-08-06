import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const BipolarDisorderSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>Symptoms of Bipolar Disorder</h1>
          <p>Bipolar Disorder symptoms can vary widely from person to person and can be divided into two main categories: manic episodes and depressive episodes.</p>
          <p>Manic Episodes</p>
              <ul>
                <li>Elevated Mood: Feeling overly happy, euphoric, or irritable.
                </li>
                <li>Increased Activity: Being more active than usual, with a burst of energy.
                </li>
                <li>Reduced Need for Sleep: Feeling rested after only a few hours of sleep.
                </li>
                <li>Racing Thoughts: Thoughts jump quickly from one idea to another.
                </li>
                <li>Impulsivity: Engaging in risky behaviors, such as spending sprees, unprotected sex, or foolish investments.
                </li>
                <li>Increased Talkativeness: Speaking rapidly and excessively.
                </li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <h1>Depressive Episodes</h1>
              <ul>
                <li>Persistent Sadness: Feeling sad, hopeless, or empty.</li>
                <li>Loss of Interest: Lack of interest in activities once enjoyed.
                </li>
                <li>Fatigue: Feeling tired or having little energy.</li>
                <li>Changes in Sleep: Sleeping too much or too little.</li>
                <li>Appetite Changes: Significant weight loss or gain due to changes in appetite.</li>
                <li>Concentration Issues: Difficulty thinking, concentrating, or making decisions.</li>
                <li>Suicidal Thoughts: Thoughts of death or suicide.</li>
              </ul>

              <h1>Types of Bipolar Disorder</h1>
              <p>There are several types of Bipolar Disorder, each characterized by the pattern and severity of the mood episodes.</p>
              <ul>
                <li>Bipolar I Disorder: Defined by manic episodes that last at least 7 days, or by manic symptoms that are so severe that immediate hospital care is needed. Depressive episodes occur as well, typically lasting at least 2 weeks.
                </li>
                <li>Bipolar II Disorder: Defined by a pattern of depressive episodes and hypomanic episodes, but not the full-blown manic episodes that are typical of Bipolar I Disorder.
                </li>
                <li>Cyclothymic Disorder (Cyclothymia): Defined by periods of hypomanic symptoms as well as periods of depressive symptoms lasting for at least 2 years (1 year in children and adolescents); however, the symptoms do not meet the diagnostic requirements for a hypomanic episode and a depressive episode.
                </li>
              </ul>

            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>

              <h1>Causes and Risk Factors</h1>
              <p>The exact cause of Bipolar Disorder is unknown, but several factors may contribute to its development, including:</p>
              <ul>
                <li>Genetics: Bipolar Disorder tends to run in families, suggesting a genetic component.</li>
                <li>Brain Structure and Function: Abnormalities in brain structure and function may play a role.</li>
                <li>Environmental Factors: Stress, abuse, significant loss, or other traumatic experiences may trigger or worsen the condition.</li>
              </ul>

                <h1>Treatment Options</h1>
                <p>Bipolar Disorder is a lifelong condition that can be managed with an effective treatment plan. Treatment typically includes:</p>
                <ul>
                  <li>Medications: Mood stabilizers, antipsychotics, and antidepressants can help manage symptoms.
                  </li>
                  <li>Psychotherapy: Cognitive-behavioral therapy (CBT), family therapy, and psychoeducation can be beneficial.</li>
                  <li>Lifestyle Changes: Maintaining a regular routine, practicing good sleep hygiene, and avoiding drugs and alcohol can help manage symptoms.</li>
                  <li>Support Networks: Support from family, friends, and support groups can provide emotional assistance and understanding.</li>
                </ul>

                <h1>Living with Bipolar Disorder</h1>
                <p>With proper treatment and support, individuals with Bipolar Disorder can lead fulfilling lives. It’s important to adhere to treatment plans, monitor mood changes, and seek help when needed. Education and awareness about the condition can also help reduce stigma and improve quality of life for those affected.</p>
          </div>


  </div>

</div>

    </>
  )
}

export default BipolarDisorderSection
