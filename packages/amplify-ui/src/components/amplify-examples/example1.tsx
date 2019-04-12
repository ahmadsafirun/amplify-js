const handleSampleFormSubmit = event => {
  event.preventDefault();
  event.stopPropagation();
  console.log('sample form submit', event);
};

const Example1 = () => (
  <div>
    <form onSubmit={handleSampleFormSubmit}>
      <fieldset>
        <legend>Sample form</legend>
        <p>
          <amplify-text-field fieldId="sample-text-field" label="Sample text field" description="Insert a string" />
        </p>
        <p>
          <amplify-text-field
            fieldId="sample-number-field"
            label="Sample number field"
            description="Select a number"
            inputProps={{
              type: 'number',
            }}
          />
        </p>
      </fieldset>
      <amplify-button type="submit">Submit</amplify-button>
    </form>
  </div>
);

export default {
  title: 'Sample form',
  Content: Example1,
};
