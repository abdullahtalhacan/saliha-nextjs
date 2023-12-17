import AlertBox from '../components/AlertBox'
import AppointmentForm from './_components/AppointmentForm'
const Appointment = () => {
  return (
    <div className="max-w-5xl px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className='pb-4'>
        <AlertBox type='info' action='link' link='/appointment/manage' linkName='Randevu İşlemleri'>
          <span>Mevcut reandevunuzu düzenlemek yada iptal etmek için <span className='font-semibold'>Randevu İşlemleri</span> sayfasını ziyaret edebilirsiniz.</span>
        </AlertBox>
      </div>
      <div className="bg-white rounded-xl shadow p-4 sm:p-7" >
        <AppointmentForm />
      </div>
    </div>
  );
}

export default Appointment