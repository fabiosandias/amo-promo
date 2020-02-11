import TravelInsuranceService from '../../services/TravelInsuranceService'

export const getAllDestinations = () => {
    const travelInsuranceService = new TravelInsuranceService()
    const response = travelInsuranceService.getAllDestinations();
    return {
        type: 'GET_ALL_DESTINATIONS_CHANGED',
        payload: response
    }
}