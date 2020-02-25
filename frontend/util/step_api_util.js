export const fetchSteps = (stepId) => (
    $.ajax({
        url: `/api/steps/${stepId}`,
        method: 'GET'
    })
)