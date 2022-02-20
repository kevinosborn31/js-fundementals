function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`);
  
    try {
      func();
      console.log(`successfully completed test suite ${testSuiteName}`);
    } catch (error) {
      const {testCaseName, errorMessage} = error;
      console.error (
        `failed running test suite ${testSuiteName} on ` + 
        `test case ${testCaseName} with error message ${errorMessage}`
        );
    }
  }