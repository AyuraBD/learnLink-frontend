import EditProfileModal from "@/components/modules/profile/EditProfileModal"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { profileService } from "@/services/profile.service"

const ProfilePage = async() => {
  const {data} = await profileService.getProfile();
  const profile = data?.result;
  return (
    <Card className="max-w-5xl mx-auto mt-10 shadow-xl p-8">
      <CardHeader className="flex flex-col items-center space-y-3">
        {profile.image ? (
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover mb-2"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <span className="text-3xl font-bold">{profile.name[0]}</span>
          </div>
        )}
        <CardTitle className="text-2xl">{profile.name}</CardTitle>
        <p className="text-lg text-gray-600">{profile.role}</p>
      </CardHeader>

      <CardContent className="space-y-4 text-lg">
        <div>
          <span className="font-semibold">Email:</span> {profile.email}{" "}
          {profile.emailVerified && <span className="text-green-600">(Verified)</span>}
        </div>
        <div>
          <span className="font-semibold">Phone:</span> {profile.phone ? profile.phone : "No phone"}
        </div>
        <div>
          <span className="font-semibold">Status:</span>{" "}
          <span
            className={
              profile.status === "ACTIVE"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {profile.status}
          </span>
        </div>

        <div>
          <span className="font-semibold">Joined:</span>{" "}
          {new Date(profile.createdAt).toLocaleDateString()}
        </div>
        <div>
          <span className="font-semibold">Last Updated:</span>{" "}
          {new Date(profile.updatedAt).toLocaleDateString()}
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <EditProfileModal />
      </CardFooter>

    </Card>

  )
}

export default ProfilePage