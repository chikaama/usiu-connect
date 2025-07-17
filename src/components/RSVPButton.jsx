export default function RSVPButton({ isRSVPed, onRSVP }) {
  return (
    <button
      onClick={onRSVP}
      className={`px-4 py-2 rounded ${
        isRSVPed ? 'bg-green-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
      } text-white`}
      disabled={isRSVPed}
    >
      {isRSVPed ? 'RSVPed' : 'RSVP to This Event'}
    </button>
  );
}
