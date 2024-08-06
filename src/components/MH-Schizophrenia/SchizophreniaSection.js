import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const SchizophreniaSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>What is Schizophrenia?</h1>
          <p>Schizophrenia is a chronic mental health disorder that affects how a person thinks, feels, and behaves. Individuals with schizophrenia may seem like they have lost touch with reality, which can be distressing for both the person affected and those around them. Despite common misconceptions, schizophrenia is not the same as having a split personality or multiple personality disorder. Instead, it involves a range of symptoms that can significantly impact daily functioning and quality of life.</p>

          <h1>Symptoms of Schizophrenia</h1>
          <p>Schizophrenia symptoms are generally categorized into three areas: positive, negative, and cognitive.</p>
          <p>Positive Symptoms: These symptoms represent changes in behavior or thoughts, such as:</p>
              <ul>
                <li>Hallucinations: Hearing, seeing, or feeling things that are not there.
                </li>
                <li>Delusions: Strongly held false beliefs that are not based in reality.
                </li>
                <li>Thought disorders: Unusual or dysfunctional ways of thinking.
                </li>
                <li>Movement disorders: Agitated body movements or, in severe cases, catatonia (lack of movement and response).
                </li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <p>Negative Symptoms: These symptoms reflect a decrease or loss of ability to function normally, </p>
              <ul>
                <li>Reduced ability to plan or carry out activities.</li>
                <li>Decreased speaking and social engagement.</li>
                <li>Flat affect (reduced expression of emotions).</li>
              </ul>

              <p>Cognitive Symptoms: These symptoms affect memory and thinking, such as:</p>
              <ul>
                <li>Trouble focusing or paying attention.
                </li>
                <li>Problems with working memory (the ability to use information immediately after learning it).
                </li>
                <li>Difficulty understanding information and using it to make decisions.
                </li>
              </ul>
              <h1>Causes of Schizophrenia</h1>
              <p>The exact cause of schizophrenia is not fully understood, but it is believed to result from a combination of genetic, brain chemistry, and environmental factors. Risk factors include:</p>
              <ul>
                <li>Family history of schizophrenia.</li>
                <li>Complications during birth or pregnancy, such as malnutrition or exposure to toxins.</li>
                <li>Early childhood trauma or abuse.</li>
                <li>Substance abuse, particularly during adolescence.</li>
              </ul>
            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>

              <h1>Diagnosis and Treatment</h1>
              <p>Schizophrenia is diagnosed based on a comprehensive psychiatric evaluation, which includes a thorough review of symptoms, medical history, and possibly a physical examination to rule out other conditions. Diagnostic criteria are based on guidelines from the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders).</p>
              <p>Treatment for schizophrenia typically involves a combination of medications and therapy. Antipsychotic medications are the cornerstone of treatment, helping to manage symptoms by affecting neurotransmitters in the brain. Psychosocial therapies, such as cognitive-behavioral therapy (CBT), social skills training, and supported employment, can also be effective in helping individuals lead more fulfilling lives.</p>

              <h1>Living with Schizophrenia</h1>
              <p>With appropriate treatment and support, many people with schizophrenia can manage their symptoms and achieve a good quality of life. Ongoing treatment and support from mental health professionals, family, and community resources are essential. It is also important for individuals to maintain a healthy lifestyle, including regular exercise, a balanced diet, and avoiding drugs and alcohol.</p>
              
              <h1>Seeking Help</h1>
              <p>If you or someone you know is experiencing symptoms of schizophrenia, it is important to seek professional help. Early intervention can make a significant difference in the course of the disorder. Reach out to a mental health professional, such as a psychiatrist or psychologist, for an evaluation and to discuss treatment options.</p>

          </div>
  </div>

</div>

    </>
  )
}

export default SchizophreniaSection
