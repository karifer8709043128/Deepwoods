export default function EcoBadge({ co2Saved }) {
    const getBadgeLevel = () => {
      if (co2Saved < 5) return 'Seed';
      if (co2Saved < 20) return 'Sprout';
      if (co2Saved < 50) return 'Tree';
      return 'Forest';
    };
  
    const badgeColors = {
      Seed: 'from-yellow-100 to-yellow-200',
      Sprout: 'from-green-100 to-green-200',
      Tree: 'from-blue-100 to-blue-200',
      Forest: 'from-purple-100 to-purple-200'
    };
  
    const level = getBadgeLevel();
  
    return (
      <div className={`bg-gradient-to-r ${badgeColors[level]} p-4 rounded-xl text-center`}>
        <div className="text-4xl mb-2">🌱</div>
        <h3 className="font-bold text-lg">{level} Saver</h3>
        <p className="text-sm">Keep going to reach the next level!</p>
      </div>
    );
  }